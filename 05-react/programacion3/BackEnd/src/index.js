require('dotenv').config();
const express = require("express");
const morgan= require('morgan');
const aplicacion= express();
const cors = require("cors");
const path= require('path');
//exportamos BaseDatos Mongo
require('./database')


//Setting
aplicacion.set('port', process.env.PORT || 4000)
aplicacion.use(express.json());
aplicacion.use(morgan('dev'));
aplicacion.use(cors());

// Importamos los modelos
require("./model/Tarea");


// Importamos las rutas
aplicacion.use('/api/tareas', require('./routes/tareaRuta'));
// require("./routes/tareaRuta")(aplicacion);
//Static File
aplicacion.use(express.static(path.join(__dirname, 'public')));

const getProductos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(equipo), 1500);
    });
}

// aplicacion.get("/equipos", async (req, res) => {
//     const productos = await getProductos();
//     res.send(productos);
// });
//Starting server
aplicacion.listen(aplicacion.get('port'), () => {
    console.info(`Iniciando servidor en puerto ${aplicacion.get('port')}`);
});