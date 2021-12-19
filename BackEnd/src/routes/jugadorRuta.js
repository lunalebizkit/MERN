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
   const buscarJugador= await Jugador.findById(id)
    res.send(buscarJugador)
});
ruta.put('/jugador/:_id', async(req, res)=>{
    const {_id} =req.params;
    const {nombre, apellido}= req.body;
    const newJugador= {nombre, apellido}  
    try {
        const actualizarJugador= await Jugador.findByIdAndUpdate({_id}, newJugador, {new :true}) 
        if (actualizarJugador) {
            res.json({mesage: 'Jugador Actualizado'})
        }
    } catch (error) {
        console.log(error)
    } 
})
ruta.post('/jugador/:id', async(req, res)=>{ 
    console.log('aca llego jugador')
    const {id}= req.params
    const {nombre, apellido}= req.body
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
ruta.delete('/jugador/:id', async(req, res)=>{
    const {id}= req.params
    const buscarEquipo= await Equipos.find( {jugadores: id} )
    if (buscarEquipo.length > 0) {
        const idEquipo=buscarEquipo[0]._id
        const quitarJugador= await Equipos.updateOne({ _id: idEquipo}, {$pull: {jugadores: id}})
        if (quitarJugador){
            try {
                await Jugador.findByIdAndRemove(id)
                res.json({mesagge: 'Jugador Eliminado'})
            } catch (error) {
                console.log(error)  
                res.status(401) 
                return
            }
        }
           
    }else{res.send('No se encontro el jugador');
     return}
})

module.exports = ruta