const express = require('express');
const api = express.Router();
const autorControlador = require('../Controllers/autor.controller');



api.get('/autores', autorControlador.listaAutor);


api.get('/autor/:id', autorControlador.autor);


api.post('/autor', autorControlador.agregarautor);

module.exports=api;