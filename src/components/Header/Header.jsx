import logo from "../../assets/react.svg";
import { Nav } from "../Nav/Nav.jsx";

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo de React" />
            <Nav />
        </header>
    )
}