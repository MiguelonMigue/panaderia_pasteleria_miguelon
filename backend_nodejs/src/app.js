const express = require('express');
const app = express();
const PORT = 3000;
const alimentosRouter = require('./routes/alimentos.routes');
app.use(alimentosRouter);
app.listen(PORT, ()=>{
    console.log(`Servidor ejecutando en http://localhost:${PORT}`);
    
})

