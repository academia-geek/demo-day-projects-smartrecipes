import { useEffect } from 'react';
import { useState } from 'react'

const UseFetch = (url) => {
    const [resultado, setResultado] = useState({cargando:true, dataServer:null});

    useEffect(() => {
      getDatos(url)
    }, [url])
    
    async function getDatos(url){
        try{
            setResultado({cargando:true, dataServer:null})
            const resp = await fetch(url)
            const dataServer = await resp.json()
            setResultado({cargando:false, dataServer})
        }catch(error){
            console.log(error)
        }
    }

return resultado

}

export default UseFetch
