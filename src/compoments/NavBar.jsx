import "../css/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../compoments/CartWidget"
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const {cart} = useContext(CartContext)
    return (
         <Navbar expand="lg" className="bg-body-tertiary navbarcss">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>BASTERMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/categories/nuevo'}>Nuevos</Nav.Link>
            <Nav.Link as={NavLink} to={'/categories/oferta'}>Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoria 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mas vendidos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {cart.length > 0 && <NavLink to='/cart' style={{textDecoration:'none'}}><CartWidget/></NavLink>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar