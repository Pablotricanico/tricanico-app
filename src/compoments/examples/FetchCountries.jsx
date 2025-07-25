import React, { useEffect } from 'react'

const FetchCountries = () => {

    useEffect(()=>{
        //pedir datos
        fetch('https://restcountries.com/v3.1/name/uruguay')
        .then((response)=> response.json()) //lo traduzco
        .then((data)=> console.log(data))
        .catch((error) => console.log(error))
    },[])

    //trycatch

    useEffect(()=>{
        const obtenerDatos = async () => {
            try{
                const response = await fetch('https://restcountries.com/v3.1/name/uruguay')//pedimos
                const data = await response.json()//traducimos
                console.log(data)
            }
            catch(error){
                console.log(error)
            }
        }
        obtenerDatos()
    },[])

  return (
    <div>
      FetchCountries
    </div>
  )
}

export default FetchCountries
