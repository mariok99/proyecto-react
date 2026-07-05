import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useEffectLoading } from "../../utils/myUseEffect.jsx"
import { getProductById } from "../../services/productServices.js";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProductDetail = async () => {
        const itemDetail = await getProductById(id);

        if (itemDetail) {
            setItemDetail(itemDetail);
            return;
        }
        throw new Error("Elemento no encontrado");
    }

    useEffectLoading(fetchProductDetail, [], setLoading);

    if (loading) return <p>Loading...</p>
    if (!itemDetail) return <p>Product not exists</p>

    return (
        <section>
            <h1> Product Details</h1>
            <div className="products-container">
                {/*Necesito ItemDetail para agregar 
                la función de agregar al carrito */}
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )
}