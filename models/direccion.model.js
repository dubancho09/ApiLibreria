var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var direccionSchema = new Schema({
    direccion:Schema.Types.String,

},{collection:'Direcciones'});

module.exports=mongoose.model('direccion', direccionSchema);