'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var editorialSchema = new Schema({
    nombreEditorial:{
        type: String,
        Required: 'El campo nombreEditorial es obligatorio'
    }
},{collection:'Editorial'});

module.exports = mongoose.model('editorial', editorialSchema);