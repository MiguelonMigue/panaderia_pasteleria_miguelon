import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';


const SignUp = () => {
     const [formData, setFormData] = useState({
      nombre: "",
      usuario: "",
      correo: "",
      password: ""
     })
     
function handleChange(e){
  const {name, value} = e.target;

  setFormData({
    ...formData, [name]: value
  })
}
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Registro exitoso")
}


 
  return (
    <div className='signUp' >
      <Header/>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column'
    }}>
      <label htmlFor="">Nombre</label>
      <input type="text"
      name='nombre'
      placeholder='Nombre' 
      value={formData.nombre}
      onChange={handleChange}/>
      <label htmlFor="">Usuario</label>
      <input type="text"
      name='usuario'
      placeholder='Usuario' 
      value={formData.usuario}
      onChange={handleChange}/>
      <label htmlFor="">Correo electrónico</label>
      <input type="text"
      name='correo'
      placeholder='Correo electrónico' 
      value={formData.correo}
      onChange={handleChange}/>
      <label htmlFor="">Contraseña</label>
      <input type="password"
      name='password'
      placeholder='Contraseña' 
      value={formData.password}
      onChange={handleChange}/>
      <button type='submit' className='botonEnviar'>Registrarse</button>
      
      
      </form>
      <div style={{marginTop: '20px'}}>
      <strong>Estado actual: </strong> {JSON.stringify( "Nombre: " + formData.nombre + " Correo: " +  formData.correo + " Usuario: " + formData.usuario)}
      </div>
      <Footer></Footer>
    </div>
    )
 
    }

export default SignUp
