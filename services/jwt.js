var jwt=require("jwt-simple");
var moment=require("moment");
var clave="clave-secreta";

exports.createToken=function(user){
var payload={
    sub:user._id,
    name:user.name,
    email:user.email,
    role:user.role,
    Image:user.Image,
    nameUser:user.nameUser,
    phone:user.phone,
    iat:moment().unix(),
    exp:moment().add(30, "days").unix
}
return jwt.encode(payload,clave);
}