const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const jwtKey = "my_secret";
const jwtExpirySeconds = 1800;  // 1/2hr
const { getUser } = require("../database/userQuery.js");


module.exports = {    
    initSesion: async (req, res) => {
        try {
            const {email, password} = req.body;
            const response = await getUser({email, password});
            const {id} = response;
            console.log(response)
            if (response.code) {    //En caso de que ususario no exista
                res.send(response);
            } else {
                const token = jwt.sign( //Generar token
                    {
                        exp: Math.floor(Date.now()/1000)+jwtExpirySeconds,
                        data: {id}
                    },
                    jwtKey
                );
                res.send({token: token, infoUser: {id: response.id, userName: response.name}, code:200}) 
            } 
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    }
};



