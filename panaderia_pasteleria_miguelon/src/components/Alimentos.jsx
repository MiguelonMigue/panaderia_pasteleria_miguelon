import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"
import {useAlimentos} from '../context/AlimentosContext'

const Alimentos = () => {
    const  {platos}  = useAlimentos();
    return (
        <div>
            <Header/>

        {platos.map((plato)=>{
        return(
        <div key={plato.nombre}>
         <h1>{plato.nombre}</h1>
         <img src={plato.img} alt="" width='100vw' height='100vh'/>
        <p>{plato.descripcion}</p>
        </div>)
    })}
    <Carrusel/>
    <Footer/>
    </div>
  )




}
export default Alimentos
    