import "../css/NavBar.css"
import CartWidget from "../compoments/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav-container">
            <h1 className="logo">LOGO</h1>
            <a className="anchor-nav">NUEVOS</a>
            <a className="anchor-nav">MAS VENDIDOS</a>
            <a className="anchor-nav">OFERTAS</a>
            <CartWidget/>
        </nav>
    )
}
export default NavBar