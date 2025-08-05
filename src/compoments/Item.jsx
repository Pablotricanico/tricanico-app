import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    console.log(prod)
  return (
    <Card style={{ width: '15rem',margin:10, }}>
      <Card.Img variant="top" src={prod.img} style={{height:'14rem', objectFit:'cover'}}/>
      <Card.Body style={{ padding:'1rem',}}>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          {prod.description}
          <br />
          ${prod.price},00
        </Card.Text>
        <Link className='btn btn-primary' to={'/Item/'+prod.id}> Ver Mas </Link>
        
      </Card.Body>
    </Card>
  )
}

export default Item
