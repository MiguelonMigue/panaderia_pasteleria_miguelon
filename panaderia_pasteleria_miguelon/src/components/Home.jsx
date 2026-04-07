import Header from './Header'
import Footer from './Footer'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjeta'
import Desayunos from './Desayunos'

const Home = () => {
  const nombre = 'Miguelón'
  const titulo_principal = "Panadería y Pastelería"
  return (
    <div>
      <Header/>
    
         <h1 className='titulo_principal'>{titulo_principal} {nombre}</h1>
     
       <Tarjeta/>
      <Carrusel/>
      <Desayunos/>
       <Footer/>
    </div>
  )
}

export default Home
