import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', padding:'1rem', width:'80%'}}>
      {data.map((prod) => <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
