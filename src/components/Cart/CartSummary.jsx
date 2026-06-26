import { useCart } from "../../context/CartContext.jsx";

export const CartSummary = () => {
    const { getCartTotal, checkout } = useCart();
    const total = getCartTotal();

    return (
        <>
            <p>Total: ${total}</p>
            <button className="btn bg success primary" onClick={checkout}>
                Purchase
            </button>
        </>
    )
};