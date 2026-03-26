import Card from 'react-bootstrap/Card'
import imagen from '../assets/mogollas_mojicones.jpg'


const Tarjeta = () => {
  const altura = '100px'
  const anchura = '140px';
  return (
    <div>
      <Card style={{ width: '100px' }}>
      <Card.Img variant="top" src={imagen} width={anchura} height={altura} />
      <Card.Body>
        <Card.Title>Salón de onces, en donde puedes disfrutar de desayunos, almuerzos, y onces con tu familia y amigos!!!! </Card.Title>
        
        
      </Card.Body>
    </Card>
  
    </div>
  )
}

export default Tarjeta
