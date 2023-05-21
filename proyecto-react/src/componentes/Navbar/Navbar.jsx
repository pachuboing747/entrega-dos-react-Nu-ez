import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className="nav-bar">
            <ul className="navbar-botones">

                <h2>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                </h2>
                <li>
                    <Link to="/Camisetas">
                    Camisetas
                    </Link>
                </li>
                <li>
                    <Link to="/Shorts">
                    Shorts
                    </Link>
                </li>
                <li>
                    <Link to="/Remeras">
                    Remeras
                    </Link>
                </li>
                <li>
                    <Link to="/Pantalones">
                    Pantalones
                    </Link>
                </li>
                <li>
                    <Link to="/Buzos">
                    Buzos
                    </Link>
                </li>
                <li>
                    <Link to="/Camperas">
                    Camperas
                    </Link>
                </li>
                <li>
                    <Link to="/Camperas">
                    Medias
                    </Link>
                </li>
                <CartWidget/>
               
            </ul>
        </nav>
    )
}

export default Navbar