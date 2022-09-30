'use strict'

var express = require('express');

var api = express.Router();

var controllerEditorial = require('../controllers/editorial.controller');

api.post('/editorial', controllerEditorial.insertEditorial);

api.put('/updateEditorial/:id', controllerEditorial.updateEditorial);

module.exports = api;