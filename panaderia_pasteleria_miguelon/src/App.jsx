
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Desayunos from './components/Desayunos.jsx'
import Bebidas from './components/Bebidas.jsx'
import PlatosEspeciales from './components/PlatosEspeciales.jsx'
import Panes from './components/Panes.jsx'
import Galleteria from './components/Galleteria.jsx'
import Postres from './components/Postres.jsx'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/desayunos' element={<Desayunos/>}/>
      <Route path='/bebidasCalientes' element={<Bebidas/>}/>
      <Route path='/platosEspeciales' element={<PlatosEspeciales/>}/>
      <Route path='/panes' element={<Panes/>}/>
      <Route path='/postres' element={<Postres/>}/>
      <Route path='/galleteria' element={<Galleteria/>}/>

    </Routes>
    </>
  )
}

export default App
