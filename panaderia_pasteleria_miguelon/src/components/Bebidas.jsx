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
import limon_coco from '../assets/limonada_coco.png'
import limon_cereza from '../assets/limoanda_cereza.png'
import limon_mango_biche from '../assets/limon_mango_biche.png'
import limonada from '../assets/natural.png'
import naranja from '../assets/naranja.png'
import mandarina from '../assets/mandarina.png'
import fresa from '../assets/fresa.png'
import mora from '../assets/mora.png'
import lulo from '../assets/lulo.png'
import guanabana from '../assets/guanabana.png'
import sandia from '../assets/guanabana.png'
import maracuya from '../assets/maracuya.png'
import frutosRojos from '../assets/frutosRojos.png'
import frutosVerdes from '../assets/frutosVerdes.png'
import mangoBiche from '../assets/mangoBiche.png'
import frutosAmarillos from '../assets/frutosAmarillos.png'
import lichie from '../assets/lichie.png'
import soda_sandia from '../assets/soda_sandia.png'
import morazul from '../assets/morazul.png'

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
    },{
      id: 2,
      nombre:'Limonada de coco',
      precio: 12000,
      img: limon_coco
    },{
      id:3,
      nombre: 'Limonada de cereza',
      precio: 18000,
      img: limon_cereza
    },{
      id:4,
      nombre: 'Limonada de mango biche',
      precio: 13000,
      img: limon_mango_biche
    },{
      id: 5,
      nombre: 'Limonada natural',
      precio: 10000,
      img: limonada
    }]

  const jugos=[{
    id:1,
    nombre: 'Naranja',
    precio: 12000,
    img:naranja
  },{
    id: 2,
    nombre: 'Mandarina',
    precio: 16000,
    img: mandarina
  },{
    id: 3,
    nombre: 'Fresa',
    precio: 11000,
    img: fresa
  },{
    id: 4,
    nombre: 'Mora',
    precio: 12000,
    img: mora
  },{
    id: 5,
    nombre: 'Lulo',
    precio: 14000,
    img: lulo
  },{
    id: 6,
    nombre: 'Guanábana',
    precio: 15000,
    img:guanabana
  },{
    id: 7,
    nombre: 'Maracuyá',
    precio: 12000,
    img: maracuya
  },{
    id: 8,
    nombre: 'Sandía',
    precio: 19000,
    img:sandia
  }]

  const sodas = [{
    id:1,
     nombre:'Frutos Rojos',
     precio: 15000,
     img:frutosRojos
  },{
    id: 2,
    nombre: 'Frutos verdes',
    precio: 15000,
    img: frutosVerdes
  },{
    id:3,
    nombre: 'Mango biche',
    precio: 15000,
    img:mangoBiche
  },{
    id: 4,
    nombre: 'Frutos amarillos',
    precio: 16000,
    img:frutosAmarillos
  },{
    id: 5,
    nombre: 'Sandía',
    precio: 17000,
    img:soda_sandia
  },{
    id: 6,
    nombre: 'Lichie',
    precio:17000,
    img:lichie
  },{
    id: 7,
    nombre: 'Mora azul',
    precio: 20000,
    img: morazul
  }]

  

  return (
    <div>
        <Header/>
          <h1>Bebidas calientes</h1>
        <div className="galeria">
      {bebidasCalientes.map((bebida)=>(
        <div key={bebida.id} className="foto">
          <h2>{bebida.nombre}</h2>
          <p>${bebida.precio}</p>
          <img src={bebida.img} alt="" width='400px' height='300px' />
        </div>
      ))}
      </div>
      <h1>Limonadas</h1>
      <div className="galeria">
        {limonadas.map((limonada)=>(
          <div key={limonada.id} className="foto">
            <h2>{limonada.nombre}</h2>
            <p>${limonada.precio}</p>
            <img src={limonada.img} width='300px' height='250px' alt="" />
          </div>
        ))}
      </div>
      <h1>Jugos naturales</h1>
      <div className="galeria">
        {jugos.map((jugo)=>(
          <div className="foto" key={jugo.id}>
            <h2>{jugo.nombre}</h2>
            <p>${jugo.precio}</p>
            <img src={jugo.img} alt="" width='190px' height='234px' />
          </div>
        ))}
      </div>
      <h1 className="titulo_principal">Sodas italianas</h1>
      <div className="galeria">
        {sodas.map((soda)=>(
          <div key={soda.id} className="foto">
            <h2>{soda.nombre}</h2>
            <p>${soda.precio}</p>
            <img src={soda.img} alt="" width='167px' height='230px' />
          </div>
        ))}
      </div>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Bebidas
