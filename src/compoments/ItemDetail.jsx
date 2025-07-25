import React from 'react'
import Item from './Item'

const ItemDetail = ({detalle}) => {
  return (
    <div>
      <Item key={detalle.id} prod={detalle}/>
    </div>
  )
}

export default ItemDetail
