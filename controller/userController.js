const userQuerys = require("../database/userQuery.js");


module.exports = {
    getUsers: async (req, res) => {  //Funcion para ruta principal
        try {
            const response = await userQuerys.getUsers()
            res.send(response);    
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    postUser: async (req, res) => { //Funcion para crear usuario
        try {
            const {email, password, name} = req.body;
            const response = await userQuerys.postUser({email, password, name});
            (response.code)
                ? res.send(response)
                : res.send({message:`El Usuario fué creado con éxito`, code:200});    
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    putUser: async (req, res) => {  //Editar datos de usuario
        try {
            const {id, email, password, name} = req.body;
            const response = await userQuerys.putUser({id, email, password, name});
            (response.code)
                ? res.send(response)
                : res.send({message:`El Usuario fué modificado con éxito`, code:200});
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },
    
    initSesion: async (req, res) => {
        res.render("login")
    },

    signUser: async (req, res) =>{
        res.render("signIn")
    }
};


