import { Link } from "react-router-dom"
import './Nav.css'
import { useCart } from "../../context/CartContext.jsx";

export const Nav = () => {
    const { getTotalProducts } = useCart();
    const totalProducts = getTotalProducts();
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/cart"}>
                        Cart
                        {totalProducts > 0 && <span className="incart">{totalProducts}</span>}
                    </Link>
                </li>

                <li>
                    <Link to={"/products"}>Products</Link>
                </li>

                <li>
                    <Link to={"/category/pelotas"}> Pelotas</Link>
                </li>

                <li>
                    <Link to={"/category/rubbers"}> Rubbers</Link>
                </li>

                <li>
                    <Link to={"/form"}>Form</Link>
                </li>
            </ul>
        </nav>
    )
}