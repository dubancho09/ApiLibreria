const express = require('express');
const api = express.Router();
const categoriaControlador = require('../Controllers/categoria.controller');


//Ruta listar Todas
api.get('/categorias', categoriaControlador.listarCategorias);

//Ruta Categorias ID
api.put('/categoria/:id', categoriaControlador.categoria);

//Ruta Nueva Categoria
api.post('/categoria', categoriaControlador.agregarCategoria);

module.exports=api;