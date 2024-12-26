const mongoose = require('mongoose');

const EquipoSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Nombre del equipo
    mapeos: [
      {
        nomenclatura: { type: String, required: true }, // Nombre interno del equipo
        analito: { type: mongoose.Schema.Types.ObjectId, ref: 'Analito' } // Referencia al analito
      }
    ]
  });
  
  const Equipo = mongoose.model('Equipo', EquipoSchema);
  
  module.exports = Equipo;
  