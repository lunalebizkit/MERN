const Jugador= require('../model/Jugador');
const Equipos= require('../model/Equipos');
const express= require('express');
const ruta= express.Router();
ruta.get('/jugador/:id', async(req, res)=>{
    const {id}=req.params
   const buscarEquipo= await Equipos.findById(id).populate("jugadores")
    res.send(buscarEquipo)
});
ruta.post('/jugador/:id', async(req, res)=>{
    const {id} =req.params;
    const {nombre, apellido}= req.body
    const buscarEquipo= await Equipos.findById(id)
    console.info(buscarEquipo)
    if (buscarEquipo) {
        const jugador= new Jugador({nombre, apellido}) 
        await jugador.save()
        buscarEquipo.jugadores = [jugador]
        console.info(buscarEquipo)
        res.send("jugador") 
    }   
})
ruta.put('/jugador/:id', async(req, res)=>{ 
    const {id}= req.params
    const {nombre, apellido}= req.body
    const jugador= new Jugador({nombre, apellido}) 
    await jugador.save()
    try {
        const actualizarEquipo= await Equipos.findByIdAndUpdate({_id: id}, {$push: {jugadores:[ jugador]}}, {new: true})
        if (actualizarEquipo) {
            const buscarEquipo1= await Equipos.findById(id).populate("jugadores")                       
             res.send(buscarEquipo1)
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }   
});
ruta.get('/jugadores', async(req, res)=>{
  
   const buscarEquipo= await Jugador.find()
    res.send(buscarEquipo)
});
module.exports = ruta