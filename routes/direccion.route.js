'use strict'

var express = require('express');

var api = express.Router();

var controllerDireccion = require('../controllers/direccion.controller');

api.post('/direccion', controllerDireccion.insertDireccion);

api.put('/updateDireccion/:id', controllerDireccion.updateDireccion);

module.exports = api;