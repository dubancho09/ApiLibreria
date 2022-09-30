//Modelo Direccion
const { response } = require('express');
const direccionModelo =  require('../models/direccion.model');

//Listar Todas las Direcciones
function listarDirecciones(req, res) {
    DireccionModelo.find({}, (err, cat)=>{
        if(err) return res.status(404).send(err);
        res.send({cat});
    });
}

//Listar Segun Su ID
function direccion(req, res){
    id = req.params.id;
    DireccionModelo.findById(id, (err, cat)=>{
        if(err) res.status(404).send(err);
        res.send({cat});
    })
}

//Nueva Direccion
function agregarDireccion(req, res){
    const params = req.body;
    const direccion = new DireccionModelo();


    let nombreDireccion = params.nombreDireccion;
    if(nombreDireccion == ""){
        return res.status(404).send("El campo es obligatorio");
    }

    direccion.nombreDireccion = nombreDireccion;

    direccion.save((err, cat)=>{
        if(err) res.send(err);
        res.send({cat});
    });

    
}

//Modificar Direccion
function modificarDireccion(req,res){
    let direccion = new DireccionModelo();
    
    const params = req.body;

    direccion.nombreDireccion = params.nombreDireccion;

    DireccionModelo.findOneAndUpdate({_id})
}

module.exports = {
    agregarDireccion,
    listarDirecciones,
    direccion,
    modificarDireccion
}