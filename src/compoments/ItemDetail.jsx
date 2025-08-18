import React, { useContext, useState } from 'react'
import { CartContext } from "../context/CartContext"
import ItemCount from './ItemCount'
import { Container, Row, Col, Card, ToastContainer, Toast } from 'react-bootstrap'
import '../css/ItemDetail.css' // opcional para personalizar

const ItemDetail = ({ detalle }) => {
  const { addItem } = useContext(CartContext)
  const [showToast, setShowToast] = useState(false)

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad)
    setShowToast(true)
    setTimeout(() =>setShowToast(false), 3000)
  }

  return (
    <Container className="my-5">
      <ToastContainer position="bottom-end" className="p-3">
        <Toast bg="success" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
            <small>Ahora</small>
          </Toast.Header>
          <Toast.Body style={{ color: 'white' }}>
            {detalle.title} fue agregado al carrito 🛒
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card.Img 
            variant="top" 
            src={detalle.img} 
            alt={detalle.title} 
            className="img-fluid rounded shadow" 
          />
        </Col>
        <Col xs={12} md={6}>
          <Card className="p-4 shadow-sm">
            <h2 className="mb-3">{detalle.title}</h2>
            <p>{detalle.description}</p>
            <p><strong>Stock:</strong> {detalle.stock}</p>
            <p><strong>Precio:</strong> ${detalle.price}</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail

