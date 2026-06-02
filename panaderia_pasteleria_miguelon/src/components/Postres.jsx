import Header from "./Header"
import Footer from "./Footer"
import Carrusel from "./Carrusel"

const Postres = () => {
  const tortas = [{
    id: 1,
    nombre: 'Brazo de reina',
    precio: '9.5k',
    img: 'https://sweetysalado.com/wp-content/uploads/2013/02/BrazodeReina1.jpg'
  },{
    id: 2,
    nombre: 'Milhoja tradicional',
    precio: '6k',
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/DOO3GH5WCNCPBKACDII674BYNE.jpg'
  },{
    id: 3,
    nombre: 'Milhoja especial',
    precio: '12k',
    img: 'https://amoradulce.com/wp-content/uploads/2024/05/Milhoja-1_04_13_2024-scaled.jpg'
  },{
    id: 4,
    nombre: 'Tartaleta de limón',
    precio: '11k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZzVcwJ26oEkgMGNRtgfNOSPE78eurk-uSG8PzzhxqLK82t4nf-b9O1U&s=10'
  },{
    id: 5,
    nombre: 'Tartaleta de fruta',
    precio: '11k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsTzQp3_-xzA2XRwx4TEtepO4Pe0STLcyPg4R5V6lylU6M4qX31ChT3h5&s=10'
  },{
    id: 6,
    nombre: 'Tiramisu',
    precio: '16k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOLoKT6KB8FxyUJVKA9JPz234xrR7rQBgrpOZC-xUJMZuXETaHP72Ve4&s=10'
  },{
    id: 7,
    nombre: 'Postre de limón',
    precio: '6k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVzLj7kemlf6Ps3aG6iTE_5vfNMkcGZU_8_Fx2COJ7VCvRCAAazRE0ibH&s=10'
  },{
    id: 8,
    nombre: 'Leche asada',
    precio: '9k',
    img: 'https://cdn0.recetasgratis.net/es/posts/6/0/5/leche_asada_con_leche_condensada_77506_600.jpg'
  },{
    id: 9,
    nombre: 'Red velvet completo',
    precio: '35k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbr69S_N607qG_XcLHaFaAx4tXOyoY7D25a64WGVT5aA&s'
  },{
    id: 10,
    nombre: 'Porcion de Red Velvet',
    precio: '10k',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7P3C8-mpV59L70boBNgQdCWABbyQiJ7zhZu-i_YBdfOhrhVnUtpn8BIk&s=10'
  }]
  return (
    <div>
        <Header/>
    
      <h1 className="titulo_principal">Postres</h1>
      <div className="galeria">
        {tortas.map((torta)=>(
          <div className="foto" key={torta.id}>
            <h2>{torta.nombre}</h2>
            <p>${torta.precio}</p>
            <img src={torta.img} width='200px' height='290px' alt="" />
          </div>
        ))}
      </div>
      <Carrusel/>
      <Footer/>
    </div>
  )
}

export default Postres
