import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import {db} from "../service/firebase"

const ItemListContainer = () => {
    //declaramos el estado donde vamos a guardar los productos
    const [data,setData] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}=useParams()
    console.log(category,'categoria');
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
            console.log(res.docs);
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
    
    //declaramos el use effect para que se ejecute una sola vez
    /*useEffect(()=>{
        setLoading(true)
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
        .finally(()=> setLoading(false))
    },[category])*/
    /*const subirData = ()=>{
        console.log("click");
        const collecionProductos = collection(db,'productos')
        products.map((prod) => addDoc(collecionProductos,prod))

        <button onClick={subirData}>Subir data</button>
    }*/
    return(
        <>
        {loading ? <LoaderComponent/> : <div style={{display:'flex', justifyContent:'center'}}>
            
            <ItemList data={data}/>
        </div>}
        </>
    )
}
export default ItemListContainer