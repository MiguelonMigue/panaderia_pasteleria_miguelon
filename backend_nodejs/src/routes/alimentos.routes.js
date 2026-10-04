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

router.get('/alimentos/:id', async (req, res) => {
  try {
    const alimento = await Alimento.findById(req.params.id);
    if (!alimento) {
      return res.status(404).json({ mensaje: 'Alimento no encontrado' });
    }
    res.json(alimento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener alimento', error });
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

router.put('/alimentos/:id', async (req, res) => {
  try {
    const alimentoActualizado = await Alimento.findByIdAndUpdate(req.params.id, 
      req.body, 
      { new:  true, runValidators: true });
      if (!alimentoActualizado) {   
        return res.status(404).json({ mensaje: 'Alimento no encontrado' });
      }
      res.status(200).json(alimentoActualizado);
      
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar alimento', error });
  }
})

router.delete('/alimentos/:id', async (req, res) => {
  try {
    const alimentoEliminado = await Alimento.findByIdAndDelete(req.params.id);
    if (!alimentoEliminado) {
      return res.status(404).json({ mensaje: 'Alimento no encontrado' });
    }
    res.json({ mensaje: 'Alimento eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar alimento', error });
  }
});


module.exports = router;