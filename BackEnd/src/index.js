require('dotenv').config();
const express = require("express");
const morgan= require('morgan');
const aplicacion= express();
const cors = require("cors");
const path= require('path');
//exportamos BaseDatos Mongo
require('./database')
// const crearRoles =require('./libs/initialSetup')
// crearRoles()

//Setting
aplicacion.set('port', process.env.PORT || 4000)
aplicacion.use(express.json());
aplicacion.use(morgan('dev')); //middelware de expresss
aplicacion.use(cors());

// Importamos los modelos
require("./model/Equipos");

// Importamos las rutas
aplicacion.use('/api/equipos', require('./routes/equiposRuta'));
aplicacion.use('/api/usuarios', require('./routes/usuariosRuta'));
// require("./routes/tareaRuta")(aplicacion);
//Static File
aplicacion.use(express.static(path.join(__dirname, 'public')));



//Starting server
aplicacion.listen(aplicacion.get('port'), () => {
    console.info(`Iniciando servidor en puerto ${aplicacion.get('port')}`);
});