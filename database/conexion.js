const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('game_score', 'postgres', 'postgresql', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = {sequelize};