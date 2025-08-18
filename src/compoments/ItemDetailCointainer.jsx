import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailCointainer = () => {
  
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [invalid, setInvalid] = useState(null)
    
    const {id} = useParams()


    console.log(id,'useparams')
//firebase
    useEffect(()=>{
      setCargando(true)
      //const prodCollection = collection(db, "productos")
      //creamos la ref
      //const docRef = doc(prodCollection, id)
      //forma corta
      const docRef = doc(db, "productos", id)
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
        setDetalle({id:res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
      })
      
      .catch((error) => console.log(error))
      .finally(()=> setCargando(false))
    },[id])

    /*useEffect(()=>{
      setCargando(true)
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .finally(()=> setCargando(false))
    },[id])
  */
  if(invalid){
    return(
      <div>
        <h2>El producto no existe</h2>
        <Link to="/">Volver a home</Link>
      </div>
    )
  }
    return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
    </>
        

  )
}

export default ItemDetailCointainer
