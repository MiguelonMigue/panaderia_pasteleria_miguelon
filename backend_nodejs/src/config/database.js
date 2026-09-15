const mongoose = require('mongoose');
const path = require('path');

// Carga el archivo .env ubicado en la raíz de backend_nodejs
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const connectDB = async () => {
  try {
    // Si process.env.MONGO_URI no existe, usa la URI local por defecto
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/panaderia_pasteleria_miguelon';

    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB conectado correctamente: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error de conexión a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

// ESENCIAL: Exportar la función para poder llamarla en app.js
module.exports = connectDB;