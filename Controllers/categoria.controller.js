//Modelo
const { response } = require('express');
const CategoriaModelo =  require('../models/categoria.model');

//Listar Todas las Categorias
function listarCategorias(req, res) {
    CategoriaModelo.find({}, (err, cat)=>{
        if(err) return res.status(404).send(err);
        res.send({cat});
    });
}

//Listar Segun Su ID
function categoria(req, res){
    id = req.params.id;
    CategoriaModelo.findById(id, (err, cat)=>{
        if(err) res.status(404).send(err);
        res.send({cat});
    })
}

//Nueva Categoria
function agregarCategoria(req, res){
    const params = req.body;
    const categoria = new CategoriaModelo();


    let nombreCategoria = params.nombreCategoria;
    if(nombreCategoria == ""){
        return res.status(404).send("El campo es obligatorio");
    }

    categoria.nombreCategoria = nombreCategoria;

    categoria.save((err, cat)=>{
        if(err) res.send(err);
        res.send({cat});
    });

    
}

//Modificar Categoria
function modificarCategoria(req,res){
    let categoria = new CategoriaModelo();
    
    const params = req.body;

    categoria.nombreCategoria = params.nombreCategoria;

    CategoriaModelo.findOneAndUpdate({_id})
}

module.exports = {
    agregarCategoria,
    listarCategorias,
    categoria,
    modificarCategoria
}