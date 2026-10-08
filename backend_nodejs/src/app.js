

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const alimentosRoutes = require('./routes/alimentos.routes');


const app = express();

const corsOptions = {
  origin: '*', // Cambia esto a la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}
// Conectar a MongoDB
connectDB();
app.use(cors(corsOptions));

// Middlewares
app.use(express.json());

// Usar rutas
app.use('/api', alimentosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de Panadería Miguelón ejecutándose en el puerto ${PORT}`);
});