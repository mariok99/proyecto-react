import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { uploadImage } from "../../services/uploadImage.js"
import { createProduct } from "../../services/productServices.js";
import { validateProduct } from "../../utils/validateProduct.js";
import { ProductFormUI } from "./ProductFormUI.jsx";
import "./ProductFormContainer.css"

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);
    const nullProduct = {
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        brand: ""
    };
    const [product, setProduct] = useState(nullProduct);

    //función que se usa cada vez que se actualiza una entrada del formulario
    const handleEntryChange = (e) => {
        const { name, value } = e.target;
        const updatedProduct = { ...product, [name]: value };
        setProduct(updatedProduct);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0] || null;
        setImage(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // validar producto a cargar. Primero se debe subir la imagen
        const newErrors = validateProduct({ ...product, image });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        // cargar producto a la base de datos
        try {
            const imageUrl = await uploadImage(image);
            const productFormat = {
                ...product,
                price: Number(product.price),
                stock: Number(product.stock),
                image: imageUrl
            }
            const id = await createProduct(productFormat);

            alert(`Producto agregado exitosamente con ID: ${id}`);
            setProduct(nullProduct);

            // para limpiar el formulario, para eliminar lo que escribió el usuario.
            setProduct({ ...nullProduct, image: null })
            setImage(null);
            // replace true es para reemplazar la entrada del historial, 
            // así no puedo ver el formulario con los datos que se acaban de subir.
            navigate(`/admin/products/success/${id}`, { replace: true })
        } catch (error) {
            console.error("Error adding product:", error);
            setErrors({ submit: error.message });
        } finally {
            setLoading(false);
        }
    }
    return <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onEntryChange={handleEntryChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
    />

}