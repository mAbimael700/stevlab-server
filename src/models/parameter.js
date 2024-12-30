const mongoose = require('mongoose');

const AnalitoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Nombre descriptivo
  code: { type: String, required: true }  // Clave del sistema
});

const Analito = mongoose.model('Analito', AnalitoSchema);

module.exports = Analito;
