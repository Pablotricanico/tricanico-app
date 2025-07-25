import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailCointainer = () => {
  
    const [detalle, setDetalle] = useState({})
    useEffect(()=>{
        getOneProduct('1')
        .then((res)=> setDetalle(res))
    },[])
  
    return (
    
        <ItemDetail detalle={detalle}/>

  )
}

export default ItemDetailCointainer
