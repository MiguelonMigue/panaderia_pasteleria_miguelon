import Header from './Header'
import Footer from './Footer'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjeta'
const Home = () => {
  return (
    <div>
          <Header/>
      <h1>Panadería y Pastelería Miguelón</h1>
      <h3>Salón de Onces</h3>
      
      <Tarjeta/>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Home
