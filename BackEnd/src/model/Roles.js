const mongoose= require('mongoose');
const {Schema} = mongoose;

const RolesSchema = new Schema({
    nombre: String
}, { versionKey: false})
module.exports= mongoose.model('Roles', RolesSchema)