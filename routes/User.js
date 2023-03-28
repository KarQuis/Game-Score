const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const userController = require("../controller/userController.js");
const authController = require("../controller/authController.js");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret";

router.use("*/profile/:idUser/:token", (req, res, next)=>{  //middleware para token
    try {
        const {idUser, token} = req.params;
        let idToken ;
        console.log(token);
        console.log("----------")
        idUser = Number(idUser);
        console.log(idUser)
        jwt.verify(token, jwtKey, (error, decoded)=>{    //Verificar token
            const {data} = decoded;
            const {id} = data;
            idToken = id;
            if (!id) {
                throw error
            };
            console.log(idToken);
            next();
        });    
    } catch (error) {
        res.redirect("/")
    }
})

// router.get("/verify", userController.getUsers); //Eliminar al final

router.post("/", userController.postUser);

router.put("/", userController.putUser);

router.post("/login", authController.initSesion);

router.get("/sesion", userController.initSesion);

router.get("/signin", userController.signUser);

router.get("/profile/:idUser/:token", userController.getProfile);


module.exports = router;