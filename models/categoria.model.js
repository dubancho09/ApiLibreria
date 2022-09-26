//Modelo Categoria
'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({
    nombreCategoria:{
        type: String,
        Required: 'El campo nombreCategoria es obligatorio'
    }
},{collection:'Categoria'});

module.exports = mongoose.model('categoria', categoriaSchema);