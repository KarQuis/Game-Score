const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "containers-us-west-73.railway.app",
    password: "Wc7h8RbAbP7pZ6OX48Sq",
    database: "railway",
    port: 6321 
});

module.exports = {pool};