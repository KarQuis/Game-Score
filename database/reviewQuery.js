const Review = require("../models/review.js");

module.exports = {
    getReviews: async (id)=>{
        try {
            const {count, rows} = await Review.findAndCountAll({where:{idGame:id}, raw: true});
            if (!rows[0]) {throw error}
            return {count, rows};
        } catch (error) {
            return {message: `No es posible mostrar las reseñas del Videojuego`, code:404}
        }
    },
    getScoresSum: async (id)=>{
        try {
            const scoreSum = await Review.sum('score', { where: {idGame:id}});
            if (!scoreSum) {throw error};
            return scoreSum;
        } catch (error) {
            return {message: `No es posible mostrar las reseñas del Videojuego`, code:404}
        }
    },
    postReview: async (reseña)=>{
        try {
            const {idUser, idGame, score, content} = reseña;
            const newReview = await Review.create({ //create: metodo para crear nuevo juego
                idUser, 
                idGame, 
                score, 
                content
            });
            if (!newReview) {throw error}
            return newReview;    
        } catch (error) {
            return {message: `No es posible crear Reseña con esos datos`, code:404}
        }
    },
    putReview: async ()=>{

    }
}
