const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt= require('bcryptjs')

const UsuarioSchema = new Schema({
  nombreUsuario: {type: String, unique: true,  required: true},
  email: {type: String, unique: true,  required: true},
  contrasenia: {type: String, required: true} ,
 roles: [{
   ref: "Roles",
   type: Schema.Types.ObjectId,
 }]
});
UsuarioSchema.statics.encriptarContrasenia= async(contrasenia) =>{
  const resultado= await bcrypt.genSalt(5)
  return await bcrypt.hash(contrasenia, resultado)
}
UsuarioSchema.statics.compararContrasenia= async (contrasenia, contraseniaRecibida) =>{
   return await bcrypt.compare(contrasenia, contraseniaRecibida)
}

module.exports= mongoose.model('Usuario', UsuarioSchema);