import { Link } from "react-router-dom"
import './Nav.css'
export const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>

                <li>
                    <Link to={"/products"}>Products</Link>
                </li>

                <li>
                    <Link to={"/form"}>Form</Link>
                </li>
            </ul>
        </nav>
    )
}