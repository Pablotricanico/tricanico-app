import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Table, Button, Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const { cart, removeItem, clear, cartTotal } = useContext(CartContext)

  // Confirmación antes de vaciar carrito
  const handleClearCart = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos agregados.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
        Swal.fire("Carrito vacío", "Se eliminaron todos los productos.", "success")
      }
    })
  }

  if (cart.length === 0) {
    return (
      <Container className="text-center mt-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver a comprar</Link>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      {/* Vista Desktop */}
      <div className="d-none d-md-block">
        <Table responsive bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <img 
                    src={prod.img} 
                    alt={prod.title} 
                    style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                  />
                </td>
                <td>{prod.title}</td>
                <td>{prod.quantity}</td>
                <td>${prod.price}</td>
                <td>${prod.price * prod.quantity}</td>
                <td>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => removeItem(prod.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Vista Mobile */}
      <div className="d-md-none">
        {cart.map((prod) => (
          <Card key={prod.id} className="mb-3 shadow-sm">
            <Row className="g-0">
              <Col xs={4}>
                <Card.Img 
                  src={prod.img} 
                  alt={prod.title} 
                  style={{ height: "100%", objectFit: "cover" }} 
                />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Text>
                    <strong>Cantidad:</strong> {prod.quantity} <br />
                    <strong>Precio:</strong> ${prod.price} <br />
                    <strong>Subtotal:</strong> ${prod.price * prod.quantity}
                  </Card.Text>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => removeItem(prod.id)}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>

      {/* Total + Acciones */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <h4>Total: ${cartTotal()}</h4>
        <div>
          <Button variant="secondary" className="me-2" onClick={handleClearCart}>
            Vaciar carrito
          </Button>
          <Link className="btn btn-success" to="/checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default CartView
