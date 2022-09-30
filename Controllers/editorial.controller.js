var Editorial=require('../models/editorial.model');

function insertEditorial(req, res){

    var params=req.body;
    var editorial=new Editorial();

    editorial.name=params.name;

    editorial.save((err, editorial)=>{
        if(err) return res.status(500).send({message:"Error en el servidor"+err})
        if(!editorial)return res.status(404).send({message:"No se encuentra la editorial"});
        if(editorial)return res.status(200).send({editorial:editorial});
    });
}

function updateEditorial(req, res){
    let id = req.params.id;
    let params = req.body;

    editorial.findByIdAndUpdate(id, params, (err, editorialUpdate)=>{
        if(err) return res.status(500).send({message: "error en el servidor" + err});
        if(!editorialUpdate) return res.status(404).send({message: "no se pudo actualizar la editorial"});
        if(editorialUpdate)return res.status(200).send({editorial: editorialUpdate}); 
    });
}
module.exports={
    insertEditorial,
    updateEditorial
}