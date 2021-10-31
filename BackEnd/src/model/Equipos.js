const mongoose = require('mongoose');
const {Schema} = mongoose;

const EquipoSchema = new Schema({
  nombre: {type: String, required: true},
  deporte: {type: String, required: true} ,
 //jugadores: []
});

module.exports= mongoose.model('Equipos', EquipoSchema);