const Usuario = require("../models/user.js");
const Direccion = require("../models/direccion.js");
const {getUsers} = require("../database/queryUser.js");
const {getAddress} = require("../database/queryAddress.js");

const generarUsuario = (e, i = []) => {
    let usuario = new Usuario;
    usuario.id = e.id;
    usuario.email = e.email;
    usuario.password = e.password;
    usuario.name = e.name;
    usuario.rol = e.rol;
    usuario.direccion = i;
    return usuario;
};

const generarDireccion = (e) => {
    let direccion = new Direccion;
    direccion.id_ = e.id_;
    direccion.idUser = e.id_user;
    direccion.address = e.address;
    direccion.comuna = e.comuna;
    direccion.city = e.city;
    direccion.phone = e.phone;
    return direccion;
};

module.exports = {
    getUser: async (req, res) => {
        const users = await getUsers();
        const address = await getAddress();
        let responseUsers = users.map((e) => {
            let responseAddress = address.filter((element) => {
                addressObj = generarDireccion(element)
                return addressObj.idUser == e.id               
            });
            let response = generarUsuario(e, responseAddress)
            return response;
        });
        console.log(responseUsers);
        res.render("AdminUsers",{responseUsers});
    }
};


