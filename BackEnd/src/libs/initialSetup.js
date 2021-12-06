const Roles= require('../model/Roles')
const jwt= require('jsonwebtoken')
const crearRoles= async()=>{
    try {
        const contador= await Roles.estimatedDocumentCount();
        if(contador > 0 ) return;
        const valores= await Promise.all([
            new Roles({nombre: 'usuario'}).save(),
            new Roles({nombre: 'moderador'}).save(),
            new Roles({nombre: 'admin'}).save(),
        ]);
        console.log(valores)
    } catch (error) {
        console.info(error)
    }
}

module.exports= crearRoles