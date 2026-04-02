import React from 'react'; // Buena práctica incluirlo, aunque no siempre es obligatorio
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; // ¡NUEVO IMPORT!
import Col from 'react-bootstrap/Col'; // ¡NUEVO IMPORT!
import imagen from '../assets/mogollas_mojicones.jpg';

const Tarjeta = () => {
  // Ya no necesitamos las constantes anchura y altura fijas de 100%
  // para la imagen dentro de los Rows/Cols de Bootstrap

  return (
    <div>
      {/* Eliminamos el width: '100px' y le damos un ancho máximo responsivo */}
      <Card style={{ maxWidth: '600px', margin: '20px auto' }} className="shadow-sm">
        {/* Usamos Row y noGutters para que la imagen y el texto queden pegados */}
        <Row noGutters>
          {/* Columna para la Imagen. md={4} significa que ocupará 4 de 12 partes en pantallas medianas+ */}
          <Col md={4} className="d-flex align-items-center justify-content-center p-0">
            <Card.Img
              variant="top" // Mantenemos 'top' por compatibilidad de Bootstrap, pero su estilo cambiará
              src={imagen}
              alt="Mogollas y mojicones del salón de onces"
              style={{
                objectFit: 'cover', // Evita que la imagen se estire feo
                height: '100%', // Que ocupe todo el alto de la columna
                width: '100%', // Que ocupe todo el ancho de la columna
                borderRadius: 'calc(0.25rem - 1px) 0 0 calc(0.25rem - 1px)' // Redondeado solo a la izquierda
              }}
            />
          </Col>

          {/* Columna para el Texto. md={8} ocupará el resto (8/12 partes) */}
          <Col md={8}>
            <Card.Body>
              {/* Cambiamos Card.Title a un <h3> normal o Card.Subtitle si quieres, 
                  para que no sea tan grande, y ponemos el texto largo en un Card.Text */}
              <Card.Title className='subtitulo'>Salón de onces</Card.Title>
              <Card.Text className='texto'>
                Un rincón acogedor donde puedes disfrutar de deliciosos desayunos, 
                almuerzos tradicionales y las mejores onces bogotanas con tu familia y amigos.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Tarjeta;