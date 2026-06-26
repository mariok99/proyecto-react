import { useCart } from "../../context/CartContext.jsx";
import { CartList } from "./CartList.jsx";
import { CartSummary } from "./CartSummary.jsx";
import { Link } from "react-router-dom";
import "./Cart.css";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Your Cart</h1>
            {cart.length === 0 ?
                (<>
                    <p className="empty-cart">Your cart is empty</p>
                    <Link to="/" className="btn primary bg-primary">
                        Back
                    </Link>
                </>) :
                (<>
                    <CartList />
                    <CartSummary />
                </>)}
        </section>
    )
}