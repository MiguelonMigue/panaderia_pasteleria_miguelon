const mongoose = require('mongoose');
const conectarDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB conectado correctamente');


        
    }
    catch(error){
        console.error('Error al conectar con MongoDB', error);
        process.exit(1);
    }
}

module.exports = conectarDB;