const {pool} = require("../database/conexion.js");

const getUsers = async () => {
    const result = await pool.query(
        `SELECT * FROM usuario;`
    );
    return result.rows;
};

module.exports = {
    getUsers
};
