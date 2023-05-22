import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className="nav-bar">
            <Link to="/"><h1>logo</h1></Link>
            <ul className="navbar-botones">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Productos/Camisetas">Camisetas</Link></li>
                <li><Link to="/Productos/Shorts">Shorts</Link></li>
                <li><Link to="/Productos/Remeras">Remeras</Link></li>
                <li><Link to="/Productos/Pantalones">Pantalones</Link></li>
                <li><Link to="/Productos/Buzos">Buzos</Link></li>
                <li><Link to="/Productos/Camperas">Camperas</Link></li>
                <li><Link to="/Productos/Medias">Medias</Link></li>
                <CartWidget/>
               
            </ul>
        </nav>
    )
}

export default Navbar