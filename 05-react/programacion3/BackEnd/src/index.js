const express = require("express");
const aplicacion= express();
const cors = require("cors");
const mongoose = require('mongoose');

const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/prog3-2021", { useNewUrlParser: true });

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

aplicacion.get("/productos", async (req, res) => {
    const productos = await getProductos();
    res.send(productos);
});

aplicacion.listen(PORT, () => {
    console.info(`Iniciando servidor en puerto ${PORT}`);
});