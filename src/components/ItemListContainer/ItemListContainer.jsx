import { useState } from "react"
import { ItemList } from "../ItemList/ItemList.jsx"
import { useEffectLoading } from "../../utils/myUseEffect.jsx"
import { getProducts, getProductsBy } from "../../services/productServices.js"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    // el argumento que le paso a useState es el estado inicial, en este caso un array vacío
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    //solo se ejecuta al iniciar el componente
    //la función de useEffect no puede definirse directamente como async
    //Por eso se define como se ve 

    //por ahora que setProduct se ligue al contexto, no lo paso como
    //parámetro.
    const fetchProducts = async () => {
        let products;
        console.log("CATEGORY: ", category);
        products = await getProductsBy(category);
        setProducts(products)
    };

    //le paso el array de dependencias, para que actualize si hay cambio de categoría
    useEffectLoading(fetchProducts, [category], setLoading)

    if (loading) return <p>Loading...</p>

    return (
        <section>
            <h1>Product list</h1>
            <ItemList products={products} />
        </section>
    )
}