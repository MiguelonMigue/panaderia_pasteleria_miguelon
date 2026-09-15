const express = require('express');

const router = express.Router();

router.get('/alimentos', (req,res)=>{
    res.json([
        {
        id: 1,
        nombre: 'Desayunos',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHMJyS4vOg6E07beuLD4CqnlL1Rm65_qHwg0OOtFpBRV9tqh5KtweRPJNIMeaOOAxRheV8tIJOYVHc9Onnp8Dj6Tb5E3cyKgZLg6mAXIUaCw24iQcfd9x8wSaBCTyPaqNDvqX4MuRjQ9qExC4xj7pngJx7OftYiXucbYSYuGgkNkero1sWY1vb_5u75pY/s1600/caldo-de-costilla.jpg',
        descripcion: 'Los mejores caldos de costilla los puedes encontrar aqui, tenemos también deliciosos tamales, changuas, combos con huevos al gusto',
        detalle: [
            {
                id: 1,
                nombre: 'Súper Combo Oro',
                precio: 14.03,
                img:'https://casaalternativa.com.co/wp-content/uploads/2024/01/BWMXieL1.jpg',
                descripcion: 'Huevos al gusto, caldo de costilla, bebida caliente al gusto y un pansito'
            },{
                id: 2,
                nombre: 'Desayuno americano',
                precio: 10.01,
                img: 'https://cdn7.kiwilimon.com/recetaimagen/15488/640x640/7533.jpg.webp',
                descripcion: 'Huevos revueltos, tocineta, tostadas'
            },{
                id: 3,
                nombre: 'Combo tolimense',
                precio: 15.05,
                img: 'https://www.pasteleriaturquesa.com/wp-content/uploads/2020/05/Combo-tamal-tolimense-chocolate-9-onzas-dos-panes-y-porci%C3%B3n-de-queso..jpeg',
                descripcion: 'Tamal tolimense, bebida caliente o fría, un pansito'
            },{
                id: 4,
                nombre: 'Combo santanderiano',
                precio: '17.08',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUtOiQk_WFFAFNIYpx9-VVuhOkT4DwXDPJvWu3d8sZ09-9q_JMWuJj1A&s=10',
                descripcion: 'Tamal santaderiano, bebida caliente o fría, un pansito'
            }
        ]
    },{
        id: 2,
        nombre: 'Bebidas calientes',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAg1uk7SCAjbaT1F219sXVQHWSysNMwZn0X1r_6YcyLmxZ0VTNrXkXhqFz&s=10',
        descripcion: 'Cafés, tintos, cappuccinos, téas especiales...'

    },{
        id: 3,
        nombre: 'Bebidas frías',
        img: 'https://www.elespectador.com/resizer/v2/S7WBBXGTAFG7VDDTI55BJ36EWA.jpg?auth=477f756bf22869dbe4799fb940f2a63233c070e006fa616558c6ef75ab270742&width=920&height=613&smart=true&quality=60',
        descripcion: 'Milo frío, cappuccinos y lattes fríos, sodas italianas, limonadas, jugos de naranja, cocteles, etc'
    }
    ])
})
module.exports = router;