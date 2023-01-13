const reviewQuerys = require("../database/reviewQuery.js");

module.exports = {
    getReviews: async (req, res) => {  //Funcion para ruta principal
        try {

        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    postReview: async (req, res) => { //Funcion para crear 
        try {
            const {idUser, idGame, score, content} = req.body;
            const response = await reviewQuerys.postReview({idUser, idGame, score, content});
            (response.code)
                ? res.send(response)
                : res.send({message:`La Reseña fué creado con éxito`, code:200});     
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    putReview: async (req, res) => {  //Editar datos 
        try {

        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    }
    
};
