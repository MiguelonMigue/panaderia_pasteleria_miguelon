import { useContext } from "react";
import { AlimentosContext } from "../context/AlimentosContext";
import Header from "./Header";
import Footer from "./Footer";
import {Carousel} from 'react-bootstrap'

const Alimentos = () => {
  const { alimentos, loading } = useContext(AlimentosContext);

  if (loading) {
    return <p className="text-center mt-5">Cargando alimentos...</p>;
  }

  return (
    <div>
     
      <Carousel>
        
          {alimentos && alimentos.map((item) => (
            <Carousel.Item key={item.id || item._id} >
          
                <img 
                  src={item.imagen || item.img || "https://via.placeholder.com/300"} 
                  alt={item.nombre || "Alimento"} 
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Carousel.Caption>
              <h2 className="text-center mb-4">Nuestros Alimentos</h2>
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">{item.descripcion}</p>
          </Carousel.Caption>
              
            </Carousel.Item>
          ))}

      </Carousel>
      
      
    </div>
  );
};

export default Alimentos;