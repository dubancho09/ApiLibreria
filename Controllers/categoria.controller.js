var Categoria=require('../models/categoria.model');

function insertCategoria(req, res){

    var params=req.body;
    var categoria=new Categoria();

    categoria.name=params.name;
    categoria.descripcion=params.descripcion;

    categoria.save((err, categoria)=>{
        if(err) return res.status(500).send({message:"Error en el servidor"+err})
        if(!categoria)return res.status(404).send({message:"No se encontraron categoria"});
        if(categoria)return res.status(200).send({categoria:categoria});
    });
}

function updateCategoria(req, res){
    let id = req.params.id;
    let params = req.body;

    categoria.findByIdAndUpdate(id, params, (err, categoriaUpdate)=>{
        if(err) return res.status(500).send({message: "error en el servidor" + err});
        if(!categoriaUpdate) return res.status(404).send({message: "no se pudo actualizar la categoria"});
        if(categoriaUpdate)return res.status(200).send({categoria: categoriaUpdate}); 
    });
}
module.exports={
    insertCategoria,
    updateCategoria
}