import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"
import corazon from '../assets/corazon.png'
import mariposa from '../assets/mariposa.png'
import galletaRed from '../assets/galletaRedVelvet.png'
import puntoRojo from '../assets/puntoRojo.png'
import avena from '../assets/avena.png'
import payasito from '../assets/payasito.png'
import galletaChocolate from '../assets/galleta_choco.png'
import chips from '../assets/chips.png'

const Galleteria = () => {
  const galletas = [{
    id: 1,
    nombre: 'Mariposa',
    precio: '5k',
    img: mariposa
  },{
    id: 2,
    nombre: 'Corazón',
    precio: '5k',
    img: corazon
  },{
    id: 3,
    nombre: 'Red velvet',
    precio: '4k',
    img: galletaRed
  },{
    id: 4,
    nombre: 'Payasito',
    precio: '4k',
    img: payasito
  },{
    id: 5,
    nombre: 'Punto rojo',
    precio: '3k',
    img: puntoRojo

  },{
    id: 6,
    nombre: 'Galleta de avena',
    precio: '4k',
    img: avena
  },{
    id: 7,
    nombre: 'Galleta chocolate',
    precio: '3k',
    img: galletaChocolate
  },{
    id: 8,
    nombre: 'Galleta chips',
    precio: '4k',
    img:chips
  }]
  return (
    <div>
        <Header/>
      <h1 className="titulo_principal">Galletas</h1>
      <div className="galeria">
        {galletas.map((galleta)=>(
          <div key={galleta.id} className="foto">
            <h2>{galleta.nombre}</h2>
            <p>${galleta.precio}</p>
            <img src={galleta.img} width='200px' height='245px' alt="" />
          </div>
        ))}
      </div>
      <Carrusel/>
      <Footer/>

    </div>
  )
}

export default Galleteria
