import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import '../css/EmptyCart.css'

const EmptyCart = () => {
  return (
    <Container className="empty-cart text-center my-5">
      <FaShoppingCart size={70} className="cart-icon mb-4" />
      <h2 className="mb-3">Tu carrito está vacío 🛒</h2>
      <p className="text-muted mb-4">
        Parece que aún no agregaste productos.<br />
        ¡Descubrí nuestras ofertas y novedades!
      </p>
      <Link to="/">
        <Button variant="dark" size="lg">
          Ir a comprar
        </Button>
      </Link>
    </Container>
  )
}

export default EmptyCart

