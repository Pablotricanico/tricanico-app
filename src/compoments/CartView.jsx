import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Table, Button, Container } from 'react-bootstrap'
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
      <Table responsive bordered hover>
        <thead className="table-dark">
          <tr>
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

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ${cartTotal()}</h4>
        <div>
          <Button variant="secondary" className="me-2" onClick={handleClearCart}>
            Vaciar carrito
          </Button>
          <Link variant="success" className='btn btn-success' to='/checkout'>
            Finalizar compra
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default CartView
