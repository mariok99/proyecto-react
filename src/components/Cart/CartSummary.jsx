import { useCart } from "../../context/CartContext.jsx";

export const CartSummary = () => {
    const { getCartTotal, checkout } = useCart();
    const total = getCartTotal();

    return (
        <>
            <p className="cart-summary-items">Total: ${total}</p>
            <button className="btn bg success primary cart-summary-items" onClick={checkout}>
                Buy
            </button>
        </>
    )
};