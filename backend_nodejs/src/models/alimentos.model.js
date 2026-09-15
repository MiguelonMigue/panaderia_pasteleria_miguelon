const mongoose = require('mongoose');

const alimentoSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  img: String,
  descripcion: String
}, { collection: 'alimentos' });

module.exports = mongoose.model('Alimento', alimentoSchema);