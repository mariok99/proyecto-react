import { CartItem } from "./CartItem.jsx"
import { useCart } from "../../context/CartContext.jsx"
export const CartList = () => {
    const { cart } = useCart();
    return (
        <>
            <div className="cart-items-container">
                {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>
        </>
    )

};