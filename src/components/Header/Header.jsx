import { Nav } from "../Nav/Nav.jsx";
import './Header.css';

export const Header = () => {
    const pathLogo = "/img/ittf_logo.png";
    return (
        <header className="header">
            <img src={pathLogo} alt="Logo de ITTF" className="img-logo" />
            <Nav />
        </header>
    )
}