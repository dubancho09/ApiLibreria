var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var editorialSchema = new Schema({
    name:Schema.Types.String,

},{collection:'Editoriales'});

module.exports=mongoose.model('editorial', editorialSchema);