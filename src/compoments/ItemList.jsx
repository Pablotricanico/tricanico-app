import React from 'react'
import Item from './Item'
import { Container, Row, Col } from 'react-bootstrap'
//import '../css/ItemList.css' // si querés crear un css aparte

const ItemList = ({ data }) => {
  return (
    <Container className="my-4">
      <Row className="g-4 justify-content-center">
        {data.map((prod) => (
          <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ItemList
