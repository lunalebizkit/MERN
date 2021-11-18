const Usuario = require('../model/Usuarios');
const Roles = require('../model/Roles');
const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

rutas.post('/signup', async (req, res) => {
    const { nombreUsuario, contrasenia, email, roles } = req.body;
    // let usuarioExistente= await Usuarios.findOne({ nombreUsuario: nombreUsuario})
  
    // if (usuarioExistente) {
    //     res.send(usuarioExistente)
    //     return
    // }else{
    //     let emailExistente= await Usuarios.findOne({ email: email})
    //     if(emailExistente) {
    //     res.json('Correo Existente') 
    //     return      
    //     }
    // }
    //  res.json( 'no hay usuarios ni contraseña')
    
    const nuevoUsuario = new Usuario({
        nombreUsuario,
        contrasenia: await Usuario.encriptarContrasenia(contrasenia),
        email 
    });
    if (roles) {
        const buscarRoles = await Roles.find({ nombre: { $in: roles } })
        nuevoUsuario.roles = buscarRoles.map(rol => rol._id)
    } else {
        const rol = await Roles.findOne({ nombre: "usuario" })
        nuevoUsuario.roles = [rol._id]
    } 
    try {
        const usuarioGuardado = await nuevoUsuario.save();
        if (usuarioGuardado){
            const token = jwt.sign({ id: usuarioGuardado._id }, SECRET, {
                expiresIn: 300 //5min ---86400 = 24hs
            })
            console.info(usuarioGuardado)
            res.status(200).json({ token })
        }
    } catch (error) {
        console.log(error)
    }   

})
rutas.post('/signin', async (req, res) => {
    const usuarioEncontrado = await Usuario.findOne({ email: req.body.email }).populate("roles")
    if (!usuarioEncontrado) return res.status(400).json({ mensaje: "no se encontro el usuario" })
    const encontrarContrasenia = await Usuario.compararContrasenia(req.body.contrasenia, usuarioEncontrado.contrasenia)
    if (!encontrarContrasenia) return res.status(401).json({ token: null, mensaje: "contraseña incorrecta" })
    const token = jwt.sign({ id: usuarioEncontrado._id }, SECRET, { expiresIn: 300 })
    res.json({ token })
})
rutas.get('/usuarioss', async(req, res)=>{
    const usuario= await Usuario.find();
    res.send(usuario)
})
module.exports = rutas