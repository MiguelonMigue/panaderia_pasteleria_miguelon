import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import mojicones from '../assets/mogollas_mojicones.jpg'

const Carrusel = () => {
  const anchura = '200px';
  const altura = '200px';
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUDZNZTLtrfQv3WlTxMz-MGLMELXxoFmgyA&s' 
        width={anchura} height={altura}
        text="First slide" />
        <Carousel.Caption>
          <h3>Bebidas Calientes</h3>
          <p>Cafés, tintos, chocolates, aromáticas, té</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        src={mojicones}
        width={anchura} height={altura} text="Second slide" />
        <Carousel.Caption>
          <h3>Panes</h3>
          <p>Hojaldrados, rollos, franceses, baguette</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        src='https://www.mycolombianrecipes.com/wp-content/uploads/2012/10/caldo-de-costilla-colombiano.jpg'
        text="Third slide" 
        width={anchura}
        height={altura}/>
        
        <Carousel.Caption>
          <h3>Desayunos</h3>
          <p>
            Caldo de costilla, omelettes, changüas, tamales.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </div>
  )
}

export default Carrusel
