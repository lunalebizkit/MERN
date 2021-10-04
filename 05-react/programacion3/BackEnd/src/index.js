require('dotenv').config();
const express = require("express");
const aplicacion= express();
const cors = require("cors");
const mongoose = require('mongoose');

//exportamos BaseDatos Mongo
require('./database')
const PORT = 4000;

aplicacion.use(express.json());
aplicacion.use(cors());

// Importamos los modelos
require("./model/Tarea");


// Importamos las rutas
require("./routes/tareaRuta")(aplicacion);

const productos = [
    { id: 1, nombre: "Nike", talle: 34, precio: 15000},
    { id: 2, nombre: "Adidas", talle: 35, precio: 25000},
    { id: 3, nombre: "xyz", talle: 35, precio: 25000}
];

const getProductos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos), 1500);
    });
}

aplicacion.get("/equipos", async (req, res) => {
    const productos = await getProductos();
    res.send(productos);
});

aplicacion.listen(PORT, () => {
    console.info(`Iniciando servidor en puerto ${PORT}`);
});