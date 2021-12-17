const Usuario = require('../model/Usuarios');
const Roles = require('../model/Roles');
const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

rutas.post('/signup', async (req, res) => {
    const { nombreUsuario, contrasenia, email, roles } = req.body;
     let usuarioExistente= await Usuario.findOne({ nombreUsuario: nombreUsuario})
     let emailExistente= await Usuario.findOne({ email: email})
     if (usuarioExistente  || emailExistente) {
        res.json({msj: "Usuario Existente"})
         return
        }else{
            const nuevoUsuario = new Usuario({
                nombreUsuario,
                contrasenia: await Usuario.encriptarContrasenia(contrasenia),
                email 
            });
            try {
                let usuarioGuardado = await nuevoUsuario.save();
                if (usuarioGuardado){
                    const token = jwt.sign({ id: usuarioGuardado._id }, SECRET, {
                        expiresIn: 3000 //5min ---86400 = 24hs
                    })
                    console.info(token)
                    res.status(200).json({ token, usuario: usuarioGuardado.nombreUsuario })
                }
            } catch (error) {
                console.log(error)
            }  
        }
    // }else{
    //     
    //     if(emailExistente) {
    //     res.json('Correo Existente') 
    //     return      
    //     }
    // }
    //  res.json( 'no hay usuarios ni contraseña')
    
   
    // if (roles) {
    //     const buscarRoles = await Roles.find({ nombre: { $in: roles } })
    //     nuevoUsuario.roles = buscarRoles.map(rol => rol._id)
    // } else {
    //     const rol = await Roles.findOne({ nombre: "usuario" })
    //     nuevoUsuario.roles = [rol._id]
    // }     

})
rutas.post('/signin', async (req, res) => {
    const usuarioEncontrado = await Usuario.findOne({ email: req.body.email }).populate("roles")
    if (!usuarioEncontrado) return res.status(400).json({ mensaje: "no se encontro el usuario" })
    const encontrarContrasenia = await Usuario.compararContrasenia(req.body.contrasenia, usuarioEncontrado.contrasenia)
    if (!encontrarContrasenia) return res.status(401).json({ token: null, mensaje: "contraseña incorrecta" })
    const token = jwt.sign({ id: usuarioEncontrado._id }, SECRET, { expiresIn: 3000 })
    res.json({ token, usuario: usuarioEncontrado.nombreUsuario })
})
rutas.get('/usuarioss', async(req, res)=>{
    const usuario= await Usuario.find();
    res.send(usuario)
})
module.exports = rutas