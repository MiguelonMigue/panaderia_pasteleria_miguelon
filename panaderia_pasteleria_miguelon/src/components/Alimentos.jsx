import { useContext } from "react";
import { AlimentosContext } from "../context/AlimentosContext";
import Header from "./Header";
import Footer from "./Footer";

const Alimentos = () => {
  const { alimentos, loading } = useContext(AlimentosContext);

  if (loading) {
    return <p className="text-center mt-5">Cargando alimentos...</p>;
  }

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nuestros Alimentos</h2>
        <div className="row">
          {alimentos && alimentos.map((item) => (
            <div key={item.id || item._id} className="col-md-4 mb-4">
              <div className="card h-100">
                {/* Etiqueta de imagen corregida sin variables de estilo propensas a error */}
                <img 
                  src={item.imagen || item.img || "https://via.placeholder.com/300"} 
                  alt={item.nombre || "Alimento"} 
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alimentos;