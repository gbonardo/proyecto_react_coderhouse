
import '../NavBar/NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">INFOTECH</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/categoria/1"} className="nav-link">Notebooks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/categoria/2"} className="nav-link">Accesorios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/categoria/3"} className="nav-link">Monitores</NavLink>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar
