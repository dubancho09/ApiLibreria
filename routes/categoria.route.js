'use strict'

var express = require('express');

var api = express.Router();

var controllerCategoria = require('../controllers/categoria.controller');

api.post('/categoria', controllerCategoria.insertCategoria);

api.put('/updateCategoria/:id', controllerCategoria.updateCategoria);

module.exports = api;