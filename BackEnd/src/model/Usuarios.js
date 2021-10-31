const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
  nombreUsuario: {type: String, unique: true,  required: true},
  email: {type: String, unique: true,  required: true},
  contrasenia: {type: String, required: true} ,
 roles: [{
   ref: "Roles",
   type: Schema.Types.ObjectId,
 }]
});

module.exports= mongoose.model('Usuario', UsuarioSchema);