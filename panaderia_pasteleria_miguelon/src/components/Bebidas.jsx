import Carrusel from "./Carrusel"
import Header from "./Header"
import Footer from "./Footer"

const Bebidas = () => {
    const BebidasCalientes = [{
        id: 1,
        nombre: 'Americano',
        precio: 3000
    },{
        id: 2,
        nombre: 'Latte Grande',
        precio: 3500
    }]
  return (
    <div>
        <Header/>
      Bebidas
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Bebidas
