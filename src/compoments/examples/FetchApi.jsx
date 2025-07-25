import React, { useEffect, useState } from 'react'
import FetchCard from './FetchCard'

const FetchApi = () => {

    const [FetchData, setFetchData] = useState ([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=>res.json())
        .then((response)=> setFetchData(response.results))
        .catch((error)=> console.log(error))
    },[])
    console.log(FetchData, 'fetchdata')
  return (
    <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
      {
        FetchData.map((personaje) =><FetchCard personaje={personaje} key={personaje.id}/>)
      }
    </div>
  )
}

export default FetchApi
