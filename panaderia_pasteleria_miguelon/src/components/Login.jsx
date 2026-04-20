import { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: ''
  })
 
  function handleChange(e){
    const {name, value} = e.target;

    setFormData({
      ...formData,[name]: value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Inicio de sesión con éxito")
  }

  return (
    <div className="login">
      <Header></Header>
      <form action="" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text"
        name="usuario"
         placeholder="Usuario" 
        value={formData.usuario}
        onChange={handleChange} />
        <input type="password"
        name="password"
        placeholder="Contraseña" 
        value={formData.password}
        onChange={handleChange}/>
        <button type="submit" className="botonEnviar">Iniciar sesión</button>
      </form>
      <Footer></Footer>
    </div>
  )
}

export default Login
