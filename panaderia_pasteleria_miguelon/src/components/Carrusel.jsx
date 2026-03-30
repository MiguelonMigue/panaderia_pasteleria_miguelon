import { Carousel, Image } from 'react-bootstrap';
// ¡Importante! Sin este CSS, el carrusel se verá como una lista vertical
import 'bootstrap/dist/css/bootstrap.min.css'; 
import mojicones from '../assets/mogollas_mojicones.jpg'; // Asegúrate de que la ruta sea correcta

const Carrusel = () => {
  const estiloImagen = {
    width: '100%',     // Recomendado: 100% para que sea responsivo
    height: '400px',    // Altura fija para que el carrusel no salte
    objectFit: 'cover'  // Evita que la imagen se deforme al cambiar de tamaño
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}> 
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUDZNZTLtrfQv3WlTxMz-MGLMELXxoFmgyA&s"
            alt="Bebidas Calientes"
            style={estiloImagen}
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Bebidas Calientes</h3>
            <p style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Cafés, tintos, chocolates, aromáticas, té</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mojicones}
            alt="Panes"
            style={estiloImagen}
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Panes</h3>
            <p style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Hojaldrados, rollos, franceses, baguette</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.mycolombianrecipes.com/wp-content/uploads/2012/10/caldo-de-costilla-colombiano.jpg"
            alt="Desayunos"
            style={estiloImagen}
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Desayunos</h3>
            <p style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>Caldo de costilla, omelettes, changüas, tamales.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
