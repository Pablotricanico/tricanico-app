import React, { useContext, useState } from 'react'
import { CartContext } from "../context/CartContext"
import ItemCount from './ItemCount'
import { Container, Row, Col, Card, ToastContainer, Toast } from 'react-bootstrap'
import '../css/ItemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detalle }) => {
  const { addItem } = useContext(CartContext)
  const [purchase,setPurchase] = useState(false)

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad)
    setPurchase(true)
  }

  return (
    <Container className="my-5">

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
            {purchase  
            ? <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Link className='btn btn-secondary' to='/'>seguir comprando</Link>
              <Link className='btn btn-success' to='/cart'>ir al carrito</Link>
            </div>
            : <ItemCount stock={detalle.stock} onAdd={onAdd} />}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail

