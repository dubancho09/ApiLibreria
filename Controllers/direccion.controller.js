var Direccion=require('../models/direccion.model');


function insertDireccion(req, res){

    var params=req.body;
    var direccion=new Direccion();

    direccion.name=params.name;

    direccion.save((err, direccion)=>{
        if(err) return res.status(500).send({message:"Error en el servidor"+err})
        if(!direccion)return res.status(404).send({message:"No se encontraron direccion"});
        if(direccion)return res.status(200).send({direccion:direccion});
    });

}

function updateDireccion(req, res){
    let id = req.params.id;
    let params = req.body;

    direcccion.findByIdAndUpdate(id, params, (err, direccionUpdate)=>{
        if(err) return res.status(500).send({message: "error en el servidor" + err});
        if(!direccionUpdate) return res.status(404).send({message: "no se pudo actualizar la direccion"});
        if(direcccionUpdate)return res.status(200).send({direccion: direccionUpdate}); 
    });
}

module.exports={
    insertDireccion,
    updateDireccion,
}