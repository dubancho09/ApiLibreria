const { response } = require('express');
const CategoriaModelo =  require('../models/autor.model');


function listaAutor(req, res) {
    autorModelo.find({}, (err, cat)=>{
        if(err) return res.status(404).send(err);
        res.send({cat});
    });
}


function autor(req, res){
    id = req.params.id;
    autorModelo.findById(id, (err, cat)=>{
        if(err) res.status(404).send(err);
        res.send({cat});
    })
}


function agregarautor(req, res){
    const params = req.body;
    const autor = new autorModelo();


    let nombreAutor = params.nombreAutor;
    if(nombreAutor == ""){
        return res.status(404).send("El campo es obligatorio");
    }

    autor.nombreAutor = nombreAutor;

    autor.save((err, cat)=>{
        if(err) res.send(err);
        res.send({cat});
    });

    
}


function modificarAutor(req,res){
    let autor = new autorModelo();
    
    const params = req.body;

    autor.autorCategoria = params.nombreAutor;

    CategoriaAutor.findOneAndUpdate({_id})
}

module.exports = {
    agregarautor,
    listaAutor,
    autor,
    modificarAutor
}