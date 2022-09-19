var express = require("express");
var api=express.Router();
var userController=require("../controllers/user.controller");
var Auth=require("../middleware/authenticad")

api.post("/user", userController.register);
api.post("/login", userController.login);
api.post("/prueba",Auth.ensureAuth, userController.prueba);
api.put("/update-user/:id",Auth.ensureAuth,userController.updateUser)
module.exports=api;