import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"
import baguette from '../assets/baguette.jpeg'
import rollo from '../assets/rollo.jpeg'
import hojaldrado from '../assets/hojaldrado.jpg'


const Panes = () => {
  const panesitos = [{
    id:1,
    nombre: 'Pan baguette',
    precio: '6k',
    img: baguette
  },{
    id: 2,
    nombre: 'Rollo',
    precio: '5¢',
    img:rollo
  },{
    id: 3,
    nombre: 'Hojaldrado',
    precio: '5¢',
    img:hojaldrado
  },{
    id: 4,
    nombre: 'Pan leche',
    precio: '5¢',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvp-5mLHdZBJXP7m2vuWIBaKcg-Nr8bR4xfQ&s'
  },{
    id: 5,
    nombre: 'Blandito',
    precio:'5¢',
    img:'https://i.pinimg.com/736x/74/f0/90/74f090165cda9bf8d957e84a9ee63729.jpg'
  },{
    id: 6,
    nombre: 'Mini francés',
    precio: '6¢',
    img:'https://media.falabella.com/tottusPE/42225836_1/w=1500,h=1500,fit=cover'
  },{
    id: 7,
    nombre:'Costeño',
    precio: '1k',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fdRZtIYVvtDvqzekplYYXStnrNHrnznp4g&s'
  },{
    id: 8,
    nombre: 'Campesino',
    precio: '6k',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrCDnnpZJByf9vAPUbf1Kt9xfs9nta-chzw&s'
  },{
    id:9,
    nombre: 'Alineado',
    precio: '6k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0i2WtXcqshiIaZFOq-N2gYrMG10MqIozVjg&s'
  },{
    id: 10,
    nombre: 'Quesillo',
    precio: '3k',
    img:'https://www.dagusto.com.co/wp-content/uploads/2021/01/Pan-abuela-y-quesillo-300x300.jpg'
  },{
    id: 11,
    nombre: 'Quesillo con jamón',
    precio: '4k',
    img:'https://laparisienne.com.co/cdn/shop/products/PANDEQUESO.jpg?v=1611073386'
  },{
    id: 12,
    nombre: 'Pandebono',
    precio: '3k',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B8-eq8QwsnXDtqOI-1h2bcsHCWNwPTicuw&s'
  },{
    id: 13,
    nombre: 'Pandeyuca',
    precio: '3k',
    img: 'https://www.elespectador.com/resizer/JGsFl04-0p5Jv4lty1F5zPY8hrw=/arc-anglerfish-arc2-prod-elespectador/public/BGWGXCNENRGUNAJFD2WHAKWU4I.jpg'
  },{
    id: 14,
    nombre: 'mojicones',
    precio: '7¢',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHMJg6QwVZTfRvVNaNggUnajkoschKxRpsQ&s'
  }]
  const roscones = [{
    id: 1,
    nombre: 'Arequipe',
    precio: '2k',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsrdLxbDIvMx88raUUijEuwD36R082wTNAg&s'
  },{
    id: 2,
    nombre: 'Bocadillo',
    precio: '2k',
    img:'https://carulla.vtexassets.com/arquivos/ids/25006754/ROSCON-BOCADILLO-CARULLA-207567_a.jpg?v=639124900482000000'
  }]
  return (
    <div>
    <Header/>

      <h1 className="titulo_principal">Panes</h1>
      <div className="galeria">
        {panesitos.map((panesito)=>(
          <div className="foto">
            <h2>{panesito.nombre}</h2>
            <p>${panesito.precio}</p>
            <img src={panesito.img} alt="" width='260px' height='280px'/>
          </div>
        ))}
      </div>
      <h1 className="titulo_principal">Roscones</h1>
      <div className="galeria">
        {roscones.map((roscon)=>(
          <div className="foto">
            <h2>{roscon.nombre}</h2>
            <p>${roscon.precio}</p>
            <img src={roscon.img} width='190px' height='200px' alt="" />
          </div>
        ))}
        </div>  
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Panes
