import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where} from 'firebase/firestore'
import {db} from "../service/firebase"

const ItemListContainer = () => {
    //declaramos el estado donde vamos a guardar los productos
    const [data,setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}=useParams()
    //firebase
    useEffect(()=>{
        setLoading(true)
        //ref de mi base de datos
        const productsCollection = category ? query(collection(db, "productos"), where("category","==",category)) : collection(db, "productos")
        //pedir los documentos
        getDocs(productsCollection)
        //tratamos la promesa
        .then((res) =>{
            //limpiamos y creamos nuestro array de datos
            const list = res.docs.map((doc) =>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[category])
    
    
    return(
        <>
        {loading ? <LoaderComponent/> : <div style={{display:'flex', justifyContent:'center'}}>
            
            <ItemList data={data}/>
        </div>}
        </>
    )
}
export default ItemListContainer