import "../css/NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../compoments/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"} className="brand-logo">
          BASTERMA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/categories/nuevo"}>
              Nuevos
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/categories/oferta"}>
              Ofertas
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/"}>
              Todos los productos
            </Nav.Link>
          </Nav>
          {cart.length > 0 && (
            <NavLink to="/cart" className="cart-link">
              <CartWidget />
            </NavLink>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
