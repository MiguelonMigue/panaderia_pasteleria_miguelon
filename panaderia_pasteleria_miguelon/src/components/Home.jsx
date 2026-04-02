import Header from './Header'
import Footer from './Footer'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjeta'
const Home = () => {
  return (
    <div>
      <Header/>
      <aside>
         <h1 className='titulo_principal'>Panadería y Pastelería Miguelón</h1>
     
       <Tarjeta/>
      <Carrusel/>
      </aside>
     
      
     
      <Footer/>
    </div>
  )
}

export default Home
