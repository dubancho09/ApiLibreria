'use strict'

var express = require('express');

var api = express.Router();

var controllerAutor = require('../controllers/autor.controller');

api.post('/autor', controllerAutor.insertAutor);

api.put('/updateAutor/:id', controllerAutor.updateAutor);

module.exports = api;