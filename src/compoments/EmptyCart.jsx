import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h2>tu carrito esta vacio :c</h2>
      <h4>te invitamos a ver nuestros Productos</h4>
      <Link className='btn btn-dark' to='/'>Ir a comprar </Link>
    </div>
  )
}

export default EmptyCart
