const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "postgres://dbscoregame_user:LV0tu7KjAVuYYeRCLWr9XNjhbQFxGYEW@dpg-cg93h8ik728n6517qgq0-a/dbscoregame"
);

module.exports = {sequelize};