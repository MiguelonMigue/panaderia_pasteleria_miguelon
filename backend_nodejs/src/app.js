require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
const conectarDB = require('../src/config/database')
const alimentosRouter = require('./routes/alimentos.routes');
require('dotenv').config();

app.use(cors());
app.use('/', alimentosRouter);
conectarDB();
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Servidor ejecutando en http://localhost:${PORT}/alimentos`);
    
})

