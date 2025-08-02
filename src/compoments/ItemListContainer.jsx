import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    //declaramos el estado donde vamos a guardar los productos
    const [data,setData] = useState([])

    const {category}=useParams()
    console.log(category,'categoria' );
    
    //declaramos el use effect para que se ejecute una sola vez
    useEffect(()=>{
        //lamamos a la ufncion que retorna una promesa
        getProducts()
        //tratar la promesa
        .then((res)=> {
            if(category){
                setData(res.filter((prod)=>prod.category === category))
            }else{
                setData(res)
                
            }
                
                
        })
        .catch((error)=> console.log(error))
    },[category])
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer