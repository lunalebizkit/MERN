const Usuarios = require('../model/Usuarios');
const express= require('express');
const rutas= express.Router()
rutas.post('/signup', async(req, res) =>{
    res.send("entro")
})
rutas.post('/signin', async(req, res)=>{
    res.send("logueo")
})
module.exports= rutas