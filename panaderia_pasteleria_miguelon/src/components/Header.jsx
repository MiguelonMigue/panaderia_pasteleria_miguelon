import {BrowserRouter, Route, Routes, Link }from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const Header = () => {
  return (

   
    <nav className='navegacion'>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de nosotros</Link>
      <Link to="/contact">Contáctenos</Link>
    </nav>

    

      
    
  )
}

export default Header
