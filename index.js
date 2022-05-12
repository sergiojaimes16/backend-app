const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

// rutas
app.use('/api/cursos', require('./routes/curso'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente");
});