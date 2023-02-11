const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const userController = require("../controller/userController.js");
const authController = require("../controller/authController.js");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret";


router.use("*/verify", (req, res, next)=>{  //middleware para token
    try {
        const {token} = req.headers;
        console.log(token);
        jwt.verify(token, jwtKey, (error, decoded)=>{    //Verificar token
            const {data} = decoded;
            const {id} = data;
            if (!id) {
                throw error
            };
            next();
        });    
    } catch (error) {
        res.redirect("/")
    }
})

router.get("/verify", userController.getUsers);

router.post("/", userController.postUser);

router.put("/", userController.putUser);

router.post("/login", authController.initSesion);

router.get("/sesion", userController.initSesion);

router.get("/signin", userController.signUser)

module.exports = router;