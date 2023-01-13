const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const jwtKey = "my_secret";
const jwtExpirySeconds = 600;
const { getUser } = require("../database/userQuery.js");


module.exports = {    
    initSesion: async (req, res) => {
        try {
            const {email, password} = req.body;
            const response = await getUser({email, password});
            const {id} = response;
            const token = jwt.sign( //Generar token
                {
                    exp: Math.floor(Date.now()/1000)+jwtExpirySeconds,
                    data: {id}
                },
                jwtKey
            );
            res.send({token: token, code:200});    
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    }
};



