import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

// Custom Hook
export const useCart = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return cartContext;
}

// Cart Provider. Un componenete puede usar CartProvides
// si es hijo de CartProvider
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (product) => {
        return cart.some(element => element.id === product.id);
    }

    const addToCart = (product) => {
        //luego veo como hago para agregar varias veces un mismo producto
        //tengo que usar el componente Count, pero no esta en el carrito,
        // hay que ver como hacer.
        
        if (!isInCart(product)) {
            setCart([...cart, product]);
            alert("Successfully added to cart")
        }
        else{
            alert("Product is already in the cart ")
        }
    }
    const removeItem = (productToRemove) => {
        const updatedCart = cart.filter(product => product.id != productToRemove)
        setCart([updatedCart]);
        if(!isInCart(productToRemove)){
            alert("Product eliminated")
        }
        else{
            alert("Producto did not eliminate")
        }
    }

    const getTotalProducts = () => {
        // cambiar cuando permita repetidos en el carrito
        return cart.length
    }

    const getCartTotal = () => {
        return cart.reduce((total, product) => product.price + total, 0);
    }

    const checkout = () => {
        alert("Your purchase has been successfully done");
        clearCart();
        navigate("/");
    }
    const values = {checkout, addToCart, clearCart, removeItem, getTotalProducts, getCartTotal}
    //acá se relaciones el CartContext con las funciones.
    //use Cart se usa afuera, para poder usar CartContext
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
} 