import Header from "./Header";
import Footer from './Footer'
import comiendo_onces from '../assets/tomando_onces.png'

const About = () => {
  const caracteristicas = [
    {
      id: 1,
      titulo: "Sobre nosotros",
      paragraph:
        "Somos un salón de onces, en donde el cliente podrá disfrutar de deliciosos desayunos, almuerzos, platos especiales, onces y bebidas calientes. Un lugar ideal para invitar a la familia y a los amigos, ah, y también a los novios",
      img: comiendo_onces
    },
  ];
  return (
    <div>

      <Header />
      <div className="galeria">
        {caracteristicas.map((caracteristica)=>(
          <div className="foto">
            <h1 className="titulo_principal">{caracteristica.titulo}</h1>
            <p>{caracteristica.paragraph}</p>
            <img src={caracteristica.img} width='250px' height='243px' alt="" />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default About;
