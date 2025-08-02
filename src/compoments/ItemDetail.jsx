import React from 'react'

const ItemDetail = ({detalle}) => {
  return (
    <div>
      <h1>detalle de : {detalle.title}</h1>
      <img src={detalle.img} alt="" />
      <p>{detalle.description}</p>
      <p>stock: {detalle.stock}</p>
      <p>precio: {detalle.price}</p>
    </div>
  )
}

export default ItemDetail
