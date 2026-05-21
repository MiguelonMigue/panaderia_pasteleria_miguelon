import Carrusel from "./Carrusel"
import Header from "./Header"
import Footer from "./Footer"
import Americano from '../assets/americano.jpeg'
import LattePeq from '../assets/latte_pequeno.jpeg'
import LatteGran from '../assets/latte_gran.jpeg'
import Campesino from '../assets/campesino.jpeg'
import chocolate from '../assets/chocolate.png'
import cappuccino from '../assets/cappuccino.png'
import carajillo from '../assets/carajillo.png'
import fruta from '../assets/fruta.png'
import hierbabuena from '../assets/hierbabuena.png'
import milo from '../assets/milo.png'
import macciato from '../assets/macciato.png'
import baylis from '../assets/baylis.png'
import limon_hierba from '../assets/limon_hierba.png'
const Bebidas = () => {
    const bebidasCalientes = [{
        id: 1,
        nombre: 'Americano',
        precio: 3000,
        img:Americano
    },{
        id: 2,
        nombre: 'Latte Grande',
        precio: 5500,
        img:LatteGran
    },{
      id: 3,
      nombre: 'Latte pequeño',
      precio: 3500,
      img:LattePeq
    },{
      id: 4,
      nombre: 'Tinto campesino',
      precio: 5000,
      img:Campesino
    },{
      id: 5,
      nombre: 'Carajillo',
      precio: 6000,
      img:carajillo
    },{
      id: 6,
      nombre: 'Cappuccino',
      precio: 6500,
      img:cappuccino
    },{
      id: 7,
      nombre: 'Chocolate',
      precio: 5000,
      img:chocolate
    },{
      id: 8,
      nombre: 'Milo caliente',
      precio: 7000,
      img:milo
    },{
      id: 9,
      nombre: 'Aromática sencilla',
      precio: 3500,
      img:hierbabuena
    },{
      id: 10,
      nombre: 'Aromática de frutas',
      precio: 5000,
      img:fruta
    },{
      id: 11,
      nombre: 'Cappuccino Baylis',
      precio: 10000,
      img:baylis
    },{
      id: 12,
      nombre: 'Macciato',
      precio: 4000,
      img:macciato
    }]
    const limonadas =[{
      id: 1,
      nombre: 'Limonada de hierbabuena',
      precio: 13000,
      img: limon_hierba
    }]
  return (
    <div>
        <Header/>
          <h1>Bebidas calientes</h1>
        <div style={{display: 'flex', flexDirection:'row'}}>
      {bebidasCalientes.map((bebida)=>(
        <div key={bebida.id}>
          <h2>{bebida.nombre}</h2>
          <p>${bebida.precio}</p>
          <img src={bebida.img} alt="" width='400px' height='300px' />
        </div>
      ))}
      </div>
      <h1>Limonadas</h1>
      <div style={{display: 'flex', flexDirection:'row'}}>
        {limonadas.map((limonada)=>(
          <div key={limonada.id}>
            <h2>{limonada.nombre}</h2>
            <p>${limonada.precio}</p>
            <img src={limonada.img} width='300px' height='250px' alt="" />
          </div>
        ))}
      </div>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Bebidas
