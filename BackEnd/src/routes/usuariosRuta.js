const Usuarios = require('../model/Usuarios');
const Roles = require('../model/Roles');
const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

rutas.post('/signup', async (req, res) => {
    const { nombreUsuario, contrasenia, email, roles } = req.body
    const nuevoUsuario = new Usuarios({
        nombreUsuario,
        contrasenia: await Usuarios.encriptarContrasenia(contrasenia),
        email
    });
    if (roles) {
        const buscarRoles = await Roles.find({ nombre: { $in: roles } })
        nuevoUsuario.roles = buscarRoles.map(rol => rol._id)
    } else {
        const rol = await Roles.findOne({ nombre: "usuario" })
        nuevoUsuario.roles = [rol._id]
    } 

    const usuarioGuardado = await nuevoUsuario.save();
    const token = jwt.sign({ id: usuarioGuardado._id }, SECRET, {
        expiresIn: 86400 // 24hs
    })
    console.info(usuarioGuardado)
    res.status(200).json({ token })

})
rutas.post('/signin', async (req, res) => {
    const usuarioEncontrado = await Usuarios.findOne({ email: req.body.email }).populate("roles")
    if (!usuarioEncontrado) return res.status(400).json({ mensaje: "no se encontro el usuario" })
    const encontrarContrasenia = await Usuarios.compararContrasenia(req.body.contrasenia, usuarioEncontrado.contrasenia)
    if (!encontrarContrasenia) return res.status(401).json({ token: null, mensaje: "contraseña incorrecta" })
    const token = jwt.sign({ id: usuarioEncontrado._id }, SECRET, { expiresIn: 86400 })
    res.json({ token })
})
module.exports = rutas