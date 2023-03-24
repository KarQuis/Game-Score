const gameQuerys = require("../database/gameQuery.js");
const categoryGameQuerys = require("../database/categoryGameQuery.js")
const {sequelize} = require("../database/conexion.js");
const reviewQuerys = require("../database/reviewQuery.js");
const { getReviews } = require("./reviewController.js");


module.exports = {
    getGames: async (req, res) => {  //Funcion para ruta principal
        try {
            const response = await gameQuerys.getGames()
            res.render("home",{response});    
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    getNewPage: async (req, res)=> {
        try {
            const {page} = req.headers;
            const response = await gameQuerys.getGamesPage(page);
            res.json(response);
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            });
        }
    },

    getGame: async (req, res)=>{
        try {
            let promedio;   //Variable para calcular valoracion de reseñas
            const {id} = req.params; 
            const response = await gameQuerys.getGame(id);  //recibir informacion del juego
            const reviewGame = await reviewQuerys.getReviews(id);   //recibir informacion de reseñas
            const {count, rows} = reviewGame;   //recibir cantidad de reseñas e informacion
            if (!count) {   // En caso de no tener reseñas
                promedio = false;
            } else {
                const sumScore = await reviewQuerys.getScoresSum(id);
                promedio = (sumScore/count).toFixed(1);    
            }
            (response.code)
            ? res.send(response)
            : res.render("gameInfo", {...response, rows, promedio});
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    postGame: async (req, res) => { //Funcion para crear game
        const t = await sequelize.transaction();    //Metodo sequalize para realizar transaccion
        try {
            let queryError = false;
            const {title, year, studio, urlImage, listCategory} = req.body;
            const gameId = await gameQuerys.postGame({title, year, studio, urlImage, t});
            for (let index = 0; index < listCategory.length; index++) { //enviar info a categoryGame
                let categoryId = listCategory[index];
                let response = await categoryGameQuerys.postCategoryGame({gameId, categoryId, t})
                if (response.code || gameId.code) {
                    queryError = true;
                }               
            };
            if (queryError) {
                await t.rollback();
                res.send({message: `No es posible asignar esta Categoria al Juego`, code:404})
            } else {
                await t.commit();
                res.send({message:`El Videojuego fué creado con éxito`, code:200});
            }
        } catch (error) {
            await t.rollback();
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    },

    putGame: async (req, res) => {  //Editar datos de game
        try {
            const {id, year, urlImage} = req.body;
            const updateGame = await gameQuerys.updateGame({id, year, urlImage});
            console.log(updateGame);
        } catch (error) {
            res.status(500).send({
                error: error.message,
                code:500
            })
        }
    }
    
};

