
import Header from "./Header"
import Footer from "./Footer"
import { useLocation } from "react-router-dom"
const DetalleBebida = () => {
    const location = useLocation();
    const bebida = location.state?.b;
    if(!bebida){
  return (
    <div>
        <Header/>
      <h2>Bebida no encontrada</h2>

      <Footer/>
    </div>
  )} 
  return(
    <>
    <Header/>
    <h1>{bebida.nombre}</h1>
    <img src={bebida.img} width='180px' height='209px' alt="" />
    <p>${bebida.precio}</p>
    </>
  )
}

export default DetalleBebida
