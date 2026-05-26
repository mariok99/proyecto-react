import { useCart } from "../../context/CartContext.jsx";
import { Item } from "../Item/Item.jsx";

export const ItemDetail = ({ item }) => {
    const {addToCart} = useCart();

    return (
        <Item {...item}>
            <button onClick = {() => addToCart(item)} className="btn primary">Agregar al carrito</button>
        </Item>
    )
}
