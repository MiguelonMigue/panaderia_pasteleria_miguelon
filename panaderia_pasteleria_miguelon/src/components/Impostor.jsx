import React from 'react'

const Impostor = () => {
    const tripulantes = [
        { nombre: "Laura Gamboa ", esImpostor: true},
        { nombre: " Gloria Enciso ", esImpostor: false},
        { nombre: " Hellen Carvajal ", esImpostor: true},
        { nombre: " Cecilia de Pinilla ", esImpostor: false},
        { nombre: " Diana Erazo ", esImpostor: true},
        {nombre: " Adriana Gómez ", esImpostor: false},
        { nombre: " Monseñor Orlando ", esImpostor: false},
        { nombre: " Angela Vergel", esImpostor: false},
        { nombre: " Clara Serrano", esImpostor: true},
        { nombre: " Lida", esImpostor: false},
        { nombre: " Beatriz Tamara", esImpostor: false},
        { nombre: " Lucila Verhelz", esImpostor: false},
        { nombre: " Roselia Jimenez", esImpostor: false},
        {nombre: " MarticaGalindo", esImpostor: false}

    ]
    const tripulacion = []

    for (let i = 0; i < tripulantes.length; i++) {
        const tripulante = 
        `${ tripulantes[i].nombre} ${tripulantes[i].esImpostor ? '' : 'no'} era impostor`;
        
        tripulacion.push(tripulante)
    }
  return (
    <div>
        <li>
            <ol>{tripulacion}</ol>
        </li>
    </div>
  )
}

export default Impostor
