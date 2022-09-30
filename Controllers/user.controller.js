var User=require('../models/user.model');
var bcrypt=require('bcrypt-nodejs');
var jwt=require("../services/jwt");

function register(req, res) {

    var params=req.body;
    var user=new User();

    user.name=params.name;
    user.email=params.email;
    user.role=params.role;
    user.role='ADMIN';
    user.image='NULL';
    user.nameUser=params.nameUser;
    user.phone=params.phone;
    if(params.password){
        bcrypt.hash(params.password,null,null,function(err, hash){
            user.password=hash;
            if(user.name!=null && user.email!=null){
                user.save((err,user)=>{
                    if(err)return res.status(500).send({message:err})
                    if(!user)return res.status(404).send({message:"No se pudo guardar el usuario"});
                    if(user)return res.status(200).send({user:user});
                })
            }
        });

    }
    
}
function login(req,res) {
    var params=req.body;
    var email=params.email;
    var password=params.password;
    User.findOne({email:email.toLocaleLowerCase()},(err,user)=>{
        if(err)return res.status(500).send({message:'Error en el servidor'+err});
        if(!user)return res.status(404).send({messge:'No se encontró el cliente'});
        if(user){
            bcrypt.compare(password,user.password,function(err,check){
                if(check){
                    if(params.gethash){
                        return res.status(200).send({token:jwt.createToken(user)})
                    } else {
                        res.status(200).send({user:user});
                    }
                }
            })
        } 
    })

}

function updateUser(req, res){
    let id=req.params.id;
    let params=req.body;

    if(req.user.sub!=id){
        return res.status(404).send({message: "No esta autorizado"});
    }
    User.findByIdAndUpdate(id, params, (err, userupdate)=>{
        if(err)return res.status(500).send({message:err})
                    if(!userupdate)return res.status(404).send({message:"No se pudo guardar el usuario"});
                    if(userupdate)return res.status(200).send({userupdate:userupdate});

    })

}


module.exports={
    register, login, updateUser
}