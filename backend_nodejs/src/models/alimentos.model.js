const mongoose = require('mongoose');

const alimentoSchema = new mongoose.Schema({
  id: {
  type: Number,
  required: true,
  unique: true
  },
  nombre: String,
  img: String,
  descripcion: String
}, { collection: 'alimentos' });

module.exports = mongoose.model('Alimento', alimentoSchema);