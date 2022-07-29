const express = require("express");
const router = express.Router();    //Definir rutas
const userController = require("../controller/userController.js");


router.get("/", userController.getUser);

router.get("/client", userController.initSesion);

module.exports = router;