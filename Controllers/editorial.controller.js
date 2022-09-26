const { response } = require('express');
const CategoriaModelo =  require('../models/editorial.model');


function listaEditorial(req, res) {
    editorialModelo.find({}, (err, cat)=>{
        if(err) return res.status(404).send(err);
        res.send({cat});
    });
}


function editorial(req, res){
    id = req.params.id;
    editorialModelo.findById(id, (err, cat)=>{
        if(err) res.status(404).send(err);
        res.send({cat});
    })
}


function agregareditorial(req, res){
    const params = req.body;
    const editorial = new editorialModelo();


    let nombreEditorial = params.nombreEditorial;
    if(nombreEditorial == ""){
        return res.status(404).send("El campo es obligatorio");
    }

    autor.nombreEditorial = nombreEditorial;

    autor.save((err, cat)=>{
        if(err) res.send(err);
        res.send({cat});
    });

    
}


function modificarEditorial(req,res){
    let editorial = new editorialModelo();
    
    const params = req.body;

    editorial.nombreEditorial = params.nombreEditorial;

    CategoriaEditorial.findOneAndUpdate({_id})
}

module.exports = {
    agregareditorial,
    listaEditorial,
    editorial,
    modificarEditorial
}