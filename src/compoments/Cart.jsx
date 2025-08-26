import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Table, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const Cart = () => {
  const {cart}= useContext(CartContext)
  return (
    <div>
        {cart.length ? <CartView/> : <EmptyCart/>}
    </div>
  )
}

export default Cart
