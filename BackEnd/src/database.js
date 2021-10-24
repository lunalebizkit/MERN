require('dotenv');
const mongo = require('mongoose');
mongo.Promise = global.Promise;
const URI= process.env.MONGODB_URI ? 
            process.env.MONGODB_URI
            : 'mongodb://localhost/databasetest';
mongo.connect(URI, {
    useNewUrlParser: true,
    /*useCreateIndex: true*/
});
const conexion= mongo.connection;
conexion.once('open', ()=>{
    console.log("Se conecto la base de Datos Mongo!!!")
});