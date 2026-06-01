import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"

const Postres = () => {
  const tortas = [{
    id: 1,
    nombre: 'Brazo de reina',
    precio: '9.5k',
    img: 'https://sweetysalado.com/wp-content/uploads/2013/02/BrazodeReina1.jpg'
  },{
    id: 2,
    nombre: 'Milhoja tradicional',
    precio: '6k',
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/DOO3GH5WCNCPBKACDII674BYNE.jpg'
  },{
    id: 3,
    nombre: 'Milhoja especial',
    precio: '12k',
    img: 'https://amoradulce.com/wp-content/uploads/2024/05/Milhoja-1_04_13_2024-scaled.jpg'
  }]
  return (
    <div>
        <Header/>
    
      <h1 className="titulo_principal">Postres</h1>
      <div className="galeria">
        {tortas.map((torta)=>(
          <div className="foto" key={torta.id}>
            <h2>{torta.nombre}</h2>
            <p>${torta.precio}</p>
            <img src={torta.img} width='200px' height='290px' alt="" />
          </div>
        ))}
      </div>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Postres
