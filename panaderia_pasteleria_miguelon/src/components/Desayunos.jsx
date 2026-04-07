

const Desayunos = () => {
    const platos =[
        { id: 1, 
            nombre: "Caldo de costilla", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNGQF3fcKgX69BKhUnJ3HHEMdPOJr7WzHzw&s",
             precio: "$15000",
            descripcion: "Caldo de costilla, acompañado de papa y cilantro de la casa"},
            { id: 2,
                nombre: "Changua sencilla",
                img: "https://comedera.com/wp-content/uploads/sites/9/2021/10/changua-colombiana.jpg",
                precio: "$15000",
                descripcion: "Caldo de leche acompañado con huevo entero cocido y cilantro, con calado"
            },
            {
                id: 3,
                nombre: "Changua especial",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL36dYrgTCh8F2TnTWiUchamNt44S2mwyfw&s",
                precio: "$18000",
                descripcion: "Acomapañdo con tajada de queso doble crema, almojabana, huevo, leche y cilantro"
            },
            {
                id: 4,
                nombre: "Happy day",
                img: "https://thumbs.dreamstime.com/b/desayuno-tradicional-de-huevo-frito-chocolate-y-rebanadas-pan-saludable-176315975.jpg?w=992",
                precio: "$14000",
                descripcion: "Huevos al gusto, acompañados con una bebida caliente, y dos panes"
            },
            {
                id: 5,
                nombre: "Happy day ranchero",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqmcWuZKF155rOi_bMuACaGbddoCi1O4FeA&s",
                precio: "$19000",
                descripcion: "Huevos rancheros con 2 panes y bebida caliente"
            }
    ]
    return (
        <div>
        {platos.map((plato)=>{
        return(
        <div key={plato.nombre}>
         <h1>{plato.nombre}</h1>
         <img src={plato.img} alt="" width='100vw' height='100vh'/>
        <p>Precio: {plato.precio}</p>
        <p>{plato.descripcion}</p>
        </div>)
    })}
    </div>
  )
}

export default Desayunos
