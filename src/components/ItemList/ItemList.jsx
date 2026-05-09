import { Item } from "../Item/Item.jsx";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    if (!products.length) return <p>No hay productos</p>

    return (
        <div className="products-container">
            {products.map(unProducto => (
                <Item key={unProducto.id} {...unProducto} />
            ))}
        </div>
    )
}