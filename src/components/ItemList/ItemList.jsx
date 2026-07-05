import { Item } from "../Item/Item.jsx";
import "./ItemList.css";
import { Link } from "react-router-dom";

export const ItemList = ({ products }) => {
    if (!products.length) return <p>No hay productos</p>

    return (
        <div className="products-container">
            {products.map(unProducto => (
                // agrego el componente Link acá porque cada item
                // es independiente y tiene su propia ruta?
                // estoy suponiendo que cualquier Item va a ser clickable
                // también que siempre va a ser un producto. Ver como
                // se puede generalizar.
                <Link to={`/product/${unProducto.id}`} key={unProducto.id} className="product-link">
                    <Item title={unProducto.title} description={unProducto.description} price={unProducto.price} image={unProducto.image} />
                </Link>
            ))}
        </div>
    )
}