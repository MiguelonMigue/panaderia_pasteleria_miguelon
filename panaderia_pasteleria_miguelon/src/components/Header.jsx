import {BrowserRouter, Route, Routes, Link }from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const Header = () => {
  return (

   
    <nav className='navegacion'>
      <Link to="/" className='link'>Inicio</Link>
      <Link to="/about" className='link'>Acerca de nosotros</Link>
      <Link to="/contact" className='link'>Contáctenos</Link>
      <Link to="/login" className='link'>Inicio de sesión</Link>
      <Link to="/signUp" className='link'>Registro</Link>
    </nav>

    

      
    
  )
}

export default Header
