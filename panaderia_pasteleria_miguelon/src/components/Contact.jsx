import Header from "./Header"
import Footer from "./Footer"
import tomando_onces from '../assets/tomando_onces.png'
const Contact = () => {
  return (
    <div>
      <Header/>
      <div className="foto">
      <h1>Miguel Buitrago, gerente</h1>
      <h3>WhatsApp: +57 313 355 0351</h3>
      <img src={tomando_onces} alt="" width='400px' height='300px'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
