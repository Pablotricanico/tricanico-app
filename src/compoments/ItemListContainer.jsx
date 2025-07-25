import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    //declaramos el estado donde vamos a guardar los productos
    const [data,setData] = useState([])
    //declaramos el use effect para que se ejecute una sola vez
    useEffect(()=>{
        //lamamos a la ufncion que retorna una promesa
        getProducts()
        //tratar la promesa
        .then((res)=> setData(res))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer