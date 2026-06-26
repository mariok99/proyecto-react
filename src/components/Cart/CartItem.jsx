import { useCart } from "../../context/CartContext.jsx"
import { Item } from "../Item/Item.jsx"
export const CartItem = ({ cartItem }) => {
    const { removeItem } = useCart();
    console.log(cartItem);
    return (
        <Item {...cartItem}>
            <button className="btn bg-delete primary " onClick={() => removeItem(cartItem.id)}>
                Remove
            </button>
        </Item>
    )
};