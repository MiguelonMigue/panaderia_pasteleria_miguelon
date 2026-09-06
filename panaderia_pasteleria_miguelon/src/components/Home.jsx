import Header from './Header'
import Footer from './Footer'
import Carrusel from './Carrusel'
import Tarjeta from './Tarjeta'
import MemoShowValue from './MemoShowValue'
import { useMemo, useState } from 'react'
import Alimentos from './Alimentos'



const Home = () => {
  const nombre = 'Miguelón'
  const titulo_principal = "Panadería y Pastelería"
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('ON');
  const params = useMemo(()=>({value}), [value]);

  console.log(`App render, ${counter}`);

  const changeCounter = () =>{
    setCounter(counter + 1);
  }

  const changeValue = () =>{
    setValue(value==='ON' ? 'OFF' : 'ON')
  }
  
 

 
  return (
    <div>
      <Header/>
      
      <div className="container">
        <h1>Example useMemo</h1>
        <div className="items">
          <MemoShowValue params={params}/>
        </div>
        <div className="actions">
          <button onClick={changeCounter} className="btn btn-teal">Re-render</button>
        </div>
        <button onClick={changeValue} className="btn btn-sky">Change Value</button>
      </div>
         <h1 className='titulo_principal'>{titulo_principal} {nombre}</h1>
     
       <Tarjeta/>
      <Alimentos/>
       <Footer/>
    </div>
  )
}

export default Home
