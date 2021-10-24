  
const mongoose = require('mongoose');
const {Schema} = mongoose;

const EquipoSchema = new Schema({
  nombre: {type: String, required: true},
  deporte: {type: String, required: true} ,
  // estaFinailzada: { type: Boolean, default: false },
  // createdAt: Date,
  // updatedAt: Date
});

module.exports= mongoose.model('Equipos', EquipoSchema);