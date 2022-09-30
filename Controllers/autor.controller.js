var Autor=require('../models/autor.model');

function insertAutor(req, res){

    var params=req.body;
    var autor=new Autor();

    autor.name=params.name;

    autor.save((err, autor)=>{
        if(err) return res.status(500).send({message:"Error en el servidor"+err})
        if(!autor)return res.status(404).send({message:"No se encuentra el autor"});
        if(autor)return res.status(200).send({autor:autor});
    });
}

function updateAutor(req, res){
    let id = req.params.id;
    let params = req.body;

    if(req.autor.sub != id){
        return res.status(404).send({message: 'Usted no esta autorizado'});
    }

    autor.findByIdAndUpdate(id, params, (err, autorUpdate)=>{
        if(err) return res.status(500).send({message: "error en el servidor" + err});
        if(!autorUpdate) return res.status(404).send({message: "no se pudo actualizar el autor"});
        if(autorUpdate)return res.status(200).send({autor: autorUpdate}); 
    });
}
module.exports={
    insertAutor,
    updateAutor
}