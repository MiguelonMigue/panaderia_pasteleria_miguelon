const express = require('express');
const router = express.Router();
const Alimento = require('../models/alimentos.model');

// GET: Obtener todos los alimentos desde MongoDB
router.get('/alimentos', async (req, res) => {
  try {
    const alimentos = await Alimento.find();
    res.json(alimentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alimentos', error });
  }
});

// POST: Crear un nuevo alimento en MongoDB
router.post('/alimentos', async (req, res) => {
  try {
    const nuevoAlimento = new Alimento(req.body);
    const alimentoGuardado = await nuevoAlimento.save();
    res.status(201).json(alimentoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar alimento', error });
  }
});

module.exports = router;