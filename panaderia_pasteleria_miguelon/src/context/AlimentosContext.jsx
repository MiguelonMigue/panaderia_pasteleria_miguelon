import { useContext, createContext, useEffect, useState } from "react";

export const AlimentosContext = createContext();

export const AlimentosProvider = ({children}) => {
    const [alimentos, setAlimentos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("http://localhost:3000/alimentos")
        .then(response=>response.json())
        .then(data=>{
            setAlimentos(data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("Error al obtener los alimentos: ", error);
            
        })
    },[]);
  return (
    <AlimentosContext.Provider value={{alimentos, loading}}>
      {children}
    </AlimentosContext.Provider>
  )
}


