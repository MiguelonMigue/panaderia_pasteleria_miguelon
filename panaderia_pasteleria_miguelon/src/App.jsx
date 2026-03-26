import Carrusel from './components/Carrusel'
import Tarjeta from './components/Tarjeta'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Header/>
      <h1>Panadería y Pastelería Miguelón</h1>
      <h3>Salón de Onces</h3>
      
      <Tarjeta/>
      <Carrusel/>
      <Footer/>
    </>
  )
}

export default App
