const Direccion = require("../models/direccion.js");

class Usuario{
    constructor (id, email, password, name, rol, direccion = []) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.rol = rol;
        this.direccion = direccion;
    }
    //Getters
    get id(){
        return this._id;
    };
    get email(){
        return this._email;
    };
    get password(){
        return this._password;
    };
    get name(){
        return this._name;
    };
    get rol(){
        return this._rol;
    };
    get direccion(){
        return this._direccion;
    };
    //Setters
    set id(nuevoId){
        this._id = nuevoId;
    };
    set email(nuevoEmail){
        this._email = nuevoEmail;
    };
    set password(nuevoPassword){
        this._password = nuevoPassword;
    };
    set name(nuevoName){
        this._name = nuevoName;
    };
    set rol(nuevoRol){
        this._rol = nuevoRol;
    };
    set direccion(nuevoDireccion){
        this._direccion = nuevoDireccion;
    };
};

module.exports = Usuario;
