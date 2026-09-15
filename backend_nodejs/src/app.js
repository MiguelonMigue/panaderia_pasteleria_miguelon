require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const alimentosRoutes = require('./routes/alimentos.routes');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());

// Usar rutas
app.use('/api', alimentosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de Panadería Miguelón ejecutándose en el puerto ${PORT}`);
});