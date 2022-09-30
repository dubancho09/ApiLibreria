var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autorSchema = new Schema({
    name:Schema.Types.String,

},{collection:'Autores'});

module.exports=mongoose.model('autor', autorSchema);