const express = require('express');
const api = express.Router();
const editorialControlador = require('../Controllers/editorial.controller');



api.get('/editoriales', editorialControlador.listaEditorial);


api.put('/autor/:id', editorialControlador.editorial);


api.post('/autor', editorialControlador.agregareditorial);

module.exports=api;