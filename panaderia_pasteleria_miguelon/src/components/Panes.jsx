import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"


const Panes = () => {
  const panesitos = [{
    id:1,
    nombre: 'Pan baguette',
    precio: '6k',
    img:''
  },{
    id: 2,
    nombre: 'Rollo',
    precio: '5¢',
    img:''
  },{
    id: 3,
    nombre: 'Hojaldrado',
    precio: '5¢',
    img:''
  },{
    id: 4,
    nombre: 'Pan leche',
    precio: '5¢',
    img:''
  },{
    id: 5,
    nombre: 'Blandito',
    precio:'5¢',
    img:''
  },{
    id: 6,
    nombre: 'Mini francés',
    precio: '6¢',
    img:''
  },{
    id: 7,
    nombre:'Costeño',
    precio: '1k',
    img:''
  },{
    id: 8,
    nombre: 'Campesino',
    precio: '6k',
    img:''
  },{
    id:9,
    nombre: 'Alineado',
    precio: '6k',
    img: ''
  },{
    id: 10,
    nombre: 'Quesillo',
    precio: '3k',
    img:''
  },{
    id: 11,
    nombre: 'Quesillo con jamón',
    precio: '4k',
    img:''
  }]
  const roscones = [{
    id: 1,
    nombre: 'Arequipe',
    precio: '2k',
    img:''
  },{
    id: 2,
    nombre: 'Bocadillo',
    precio: '2k',
    img:''
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
            <img src={panesito.img} alt="" width='160px' height='200px'/>
          </div>
        ))}
      </div>

      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Panes
