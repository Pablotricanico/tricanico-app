import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import '../css/Item.css' // podés crearlo

const Item = ({ prod }) => {
  return (
    <Card className="item-card h-100 shadow-sm">
      <Card.Img variant="top" src={prod.img} className="card-img-top" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>{prod.description}</Card.Text>
        </div>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span className="fw-bold">${prod.price},00</span>
          <Link className="btn btn-outline-primary btn-sm" to={`/item/${prod.id}`}>
            Ver Más
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item

