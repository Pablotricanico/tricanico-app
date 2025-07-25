import React from 'react'
import { Button, Card } from 'react-bootstrap'

const FetchCard = ({personaje}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
          {personaje.status}
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default FetchCard
