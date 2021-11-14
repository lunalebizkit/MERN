const mongoose = require('mongoose');
const {Schema} = mongoose;

const EquipoSchema = new Schema({
  nombre: {type: String, required: true},
  deporte: {type: String, required: true} ,
 jugadores: [{  ref: "Jugador",
type: Schema.ObjectId}]
});

module.exports= mongoose.model('Equipos', EquipoSchema);