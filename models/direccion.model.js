'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var direccionSchema = new Schema({
    direccion:{
        type: String,
        Required: 'El campo Direccion es obligatorio'
    }
},{collection:'direccion'});

module.exports = mongoose.model('direccion', direccionSchema);