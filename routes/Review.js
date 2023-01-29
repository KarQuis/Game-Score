const express = require("express");
const app = express();
const router = express.Router();    //Definir rutas
const jwt = require("jsonwebtoken");
const reviewController = require("../controller/reviewController.js");
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
        res.status(401).send({
            message: "Es necesario autenticar para realizar reseña",
            code:401
        })
    }
});

router.get("/", reviewController.getReviews);

router.post("/verify", reviewController.postReview);

module.exports = router;