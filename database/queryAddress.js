const {pool} = require("./conexion.js");

const getAddress = async () => {
    const result = await pool.query(
        `SELECT * FROM direccion; `
    );
    return result.rows;
};

module.exports = {
    getAddress
};
