const express = require('express');
const api = express.Router();
const direccionControlador = require('../Controllers/direccion.controller');


//Ruta listar Todas
api.get('/direcciones', direccionControlador.listarDirecciones);

//Ruta Categorias ID
api.put('/direccion/:id', direccionControlador.direccion);

//Ruta Nueva Categoria
api.post('/direccion', direccionControlador.agregarDireccion);

module.exports=api;