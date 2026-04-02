import { FaFacebook, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <h6>Todos los derechos reservados &copy;</h6>
      <div className="icons">
        <FaInstagram/>
      <FaDiscord/>
      <FaFacebook/>
      <FaGithub/>
      </div>
      
      
    </div>
  )
}

export default Footer
