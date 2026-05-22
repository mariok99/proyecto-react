import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList.jsx"
import { myUseEffect } from "../../myFunctions/myUseEffect.jsx"

export const ItemListContainer = () => {
    // el argumento que le paso a useState es el estado inicial, en este caso un array vacío
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //solo se ejecuta al iniciar el componente
    //la función de useEffect no puede definirse directamente como async
    //Por eso se define como se ve 

    //por ahora que setProduct se ligue al contexto, no lo paso como
    //parámetro.
    const fetchProducts = async () => {
        const response = await fetch("/data/products.json")
        const data = await response.json()
        setProducts(data)
    };

    myUseEffect(fetchProducts, [], setLoading)

    if (loading) return <p>Loading...</p>

    return (
        <section>
            <h1>Product list</h1>
            <ItemList products={products} />
        </section>
    )
}