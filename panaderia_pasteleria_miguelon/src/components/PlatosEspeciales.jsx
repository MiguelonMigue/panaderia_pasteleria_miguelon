import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"

const PlatosEspeciales = () => {
  const platos = [{
    id: 1,
    nombre: 'Sánduche mixto',
    precio: '10k',
    img: 'https://doihojqqs770p.cloudfront.net/articulos/articulos-149042.jpeg'
  },{
    id: 2,
    nombre: 'Sánduche philadelphia',
    precio: '20k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4WBw-lcliAC6vTsJAE_PHPbBbOek5yXnFw&s'
  },{
    id:3,
    nombre: 'Fetuccini con camarones',
    precio: '35k',
    img: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/2001a362-8b90-4b9f-b48b-f64bebe7104c/Derivates/fb0a1b25-6159-4c19-8e04-499b5bce114f.jpg'
  },{
    id: 4,
    nombre: 'Fetuccini a la carbonara',
    precio: '30k',
    img: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/2001a362-8b90-4b9f-b48b-f64bebe7104c/Derivates/fb0a1b25-6159-4c19-8e04-499b5bce114f.jpg'
  },{
    id: 5,
    nombre: 'Costillitas de cerdo en salsa BBQ',
    precio: '25k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUj0E-QioBHw6Jq41TULpDGTciYWL9WCMpA&s'
  },{
    id: 6,
    nombre: 'Mojarra frita',
    precio: '27k',
    img: 'https://recetas.encolombia.com/wp-content/uploads/2013/03/mojarra-frita.webp'

  },{
    id: 7,
    nombre: 'Trucha al ajillo',
    precio: '30k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV73lvyDc7YCd842XSbxZBHNDszjh6t5hxBA&s'
  },{
    id: 8,
    nombre: 'Punta de anca',
    precio: '25k',
    img: 'https://restauranteinsignia.com/wp-content/uploads/2025/05/punta-anca-600x600.jpg'
  },{
    id: 9,
    nombre: 'Combo de hamburguesa de la casa',
    precio: '40k',
    img: 'https://tofuu.getjusto.com/orioneat-local/resized2/bLMrsbZwrMP26GNXK-300-x.webp'
  },{
    id: 10,
    nombre: 'Alitas de pollo en BBQ',
    precio: '23k',
    img: 'https://es.cravingsjournal.com/wp-content/uploads/2019/11/alitas-bbq-6-500x500.jpg'
    },{
      id: 12,
      nombre: 'Crepe de pollo',
      precio: '25k',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8G0lx_9ldat_zaXXJ29avJDhQH5RkNcdww&s'
    },{
      id: 13,
      nombre: 'Crepe de frutos del mar',
      precio: '45k',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqTy_7xZc-IOHpP4XMgf-47seV0FRJ3tvUw&s'
    },{
      id: 14,
      nombre: 'Crepe de lomo árabe',
      precio: '35k',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBJm3fcL_3C2y9KRNZZOfH5A7frPtfRsI3w&s'
    }]
  return (
    <div>
    <Header/>
    <h1 className="titulo_principal">Platos especiales</h1>
    <div className="galeria">
      {platos.map((plato)=>(
        <div className="foto">
          <h2>{plato.nombre}</h2>
          <p>${plato.precio}</p>

          <img src={plato.img} width='210px' height='200px' alt="" />
        </div>
      ))}
    </div>
    <Carrusel/>
    <Footer/>
    </div>
  )
}

export default PlatosEspeciales
