import { useContext, createContext, useEffect, useState } from "react";

import React from 'react'

const AlimentosContext = ({children}) => {
    const [alimentos, setAlimentos] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/alimentos")
        .then(response=>response.json())
        .then(data=>{
            setAlimentos(data);
        })
        .catch(error=>{
            console.error("Error al obtener los alimentos: ", error);
            
        })
    },[]);
  return (
    <AlimentosContext.Provider value={{alimentos}}>
      {children}
    </AlimentosContext.Provider>
  )
}

export default AlimentosContext = ()=>{
    return useContext(AlimentosContext);
}
