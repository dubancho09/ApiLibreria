'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autorSchema = new Schema({
    nombreAutor:{
        type: String,
        Required: 'El campo nombreCategoria es obligatorio'
    }
},{collection:'Autor'});

module.exports = mongoose.model('autor', autorSchema);