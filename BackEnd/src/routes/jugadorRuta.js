const Jugador= require('../model/Jugador');
const Equipos= require('../model/Equipos');
const verifyToken= require('../libs/verifyToken')
const express= require('express');
const ruta= express.Router();

ruta.get('/jugador/:id', verifyToken, async(req, res)=>{
    const {id}=req.params
   const buscarEquipo= await Equipos.findById(id).populate("jugadores")
    res.send(buscarEquipo)
});
ruta.get('/jugadores/:id',verifyToken, async(req, res)=>{
    const {id}=req.params
   const buscarEquipo= await Jugador.findById(id)
   console.info(buscarEquipo)
    res.send(buscarEquipo)
});
ruta.put('/jugador/:id',verifyToken, async(req, res)=>{
    const {id} =req.params;
    const jugador= req.body
    try {
        const actualizarJugador= await Jugador.findByIdAndUpdate({_id: id }, jugador, {new :true}) 
        if (actualizarJugador) {
            res.json({mesage: 'Jugador Actualizado'})
        }
    } catch (error) {
        console.log(error)
    }   
})
ruta.post('/jugador/:id',verifyToken, async(req, res)=>{ 
    const {id}= req.params
    const {nombre, apellido}= req.body
    console.log(req.body)
    const jugador= new Jugador({nombre, apellido}) 
    const guardarJugador= await jugador.save()
    if (guardarJugador) { 
        try {
        const actualizarEquipo= await Equipos.findByIdAndUpdate({_id: id}, {$push: {jugadores:[ jugador]}}, {new: true})
        if (actualizarEquipo) {
            const buscarEquipo1= await Equipos.findById(id).populate("jugadores")                       
             res.send(buscarEquipo1)
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }  }
    
});
ruta.delete('/jugador/:id',verifyToken, async(req, res)=>{
    const {id}= req.params
    const buscarEquipo= await Equipos.find( {jugadores: id} )
    if (buscarEquipo.length > 0) {
        const idEquipo=buscarEquipo[0]._id
        await Equipos.updateOne({ _id: idEquipo}, {$pull: {jugadores: id}})
           try {
            await Jugador.findByIdAndRemove(id)
            res.json({mesagge: 'Jugador Eliminado'})
        } catch (error) {
            console.log(error)   
        }
    } res.send('No se encontro el jugador')
})

module.exports = ruta