import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({detalle}) => {
const {addItem, cart}= useContext(CartContext)
  const onAdd = (cantidad)=>{
    console.log(`compraste ${cantidad}`);
    addItem(detalle, cantidad)
  }
console.log(cart, 'carrito')
  return (
    <div>
      <h1>detalle de : {detalle.title}</h1>
      <img src={detalle.img} alt="" />
      <p>{detalle.description}</p>
      <p>stock: {detalle.stock}</p>
      <p>precio: {detalle.price}</p>
      <ItemCount stock ={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail
