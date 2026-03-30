import Header from './Header'
import Footer from './Footer'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjeta'
const Home = () => {
  return (
    <div>
      <Header/>
      <aside>
         <h1>Panadería y Pastelería Miguelón</h1>
      <h3>Salón de Onces</h3>
       <Tarjeta/>
      <Carrusel/>
      </aside>
     
      
     
      <Footer/>
    </div>
  )
}

export default Home
