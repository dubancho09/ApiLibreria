'use strict'
var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var userSchema=new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    password:Schema.Types.String,
    image:Schema.Types.String,
    nameUser:Schema.Types.String,
    phone:Schema.Types.Number,
    role:Schema.Types.String,
    IdDireccion: { type: Schema.ObjectId, ref: "direccion" }
},{collection:'Users'});

module.exports =mongoose.model("user",userSchema);