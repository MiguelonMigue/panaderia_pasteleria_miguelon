import { Carousel, Image } from 'react-bootstrap';
// ¡Importante! Sin este CSS, el carrusel se verá como una lista vertical
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { Link } from 'react-router-dom'; 


const Carrusel = () => {
  const estiloImagen = {
    width: '100%',     // Recomendado: 100% para que sea responsivo
    height: '400px',    // Altura fija para que el carrusel no salte
    objectFit: 'cover'  // Evita que la imagen se deforme al cambiar de tamaño
  };

  const fotos = [
  {
    id:1,
    img:'https://www.mycolombianrecipes.com/wp-content/uploads/2012/10/caldo-de-costilla-colombiano.jpg',
    texto: 'Caldo de costilla, omelettes, changüas, tamales.',
    titulo: 'Alimentos',
    link : '/alimentos'
  }]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}> 
      {/* El Carousel va AFUERA del map */}
      <Carousel>
        {fotos.map((foto) => {
          return (
            /* El key siempre va en el elemento raíz que se repite dentro del map */
            <Carousel.Item key={foto.id}>
              <img
                className="d-block w-100"
                src={foto.img}
                alt={foto.titulo}
                style={estiloImagen}
              />
              <Carousel.Caption>
                {/* Estilos añadidos para que el Link no se pegue al texto y se vea como un botón o etiqueta limpia */}
                <Link 
                  to={foto.link} 
                  style={{ 
                    backgroundColor: '#00224D', 
                    color: '#FF204E', 
                    padding: '5px 10px', 
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  {foto.titulo}
                </Link>
                <p style={{ backgroundColor: '#00224D', color: 'white', marginTop: '10px', padding: '5px' }}>
                  {foto.texto}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carrusel;
