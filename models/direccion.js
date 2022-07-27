class Direccion {
    constructor (id_, idUser, address, comuna, city, phone) {
        this.id_ = id_;
        this.idUser = idUser;
        this.address = address;
        this.comuna = comuna;
        this.city = city;
        this.phone = phone;
    }
    //Getters
    get id_(){
        return this._id_;
    };
    get idUser(){
        return this._idUser;
    };
    get address(){
        return this._address;
    };
    get comuna(){
        return this._comuna;
    };
    get city(){
        return this._city;
    };
    get phone(){
        return this._phone;
    };
    //Setters
    set id_(nuevoId){
        this._id_ = nuevoId;
    };
    set idUser(nuevoIdUser){
        this._idUser = nuevoIdUser;
    }
    set address(nuevoAddress){
        this._address = nuevoAddress;
    };
    set comuna(nuevoComuna){
        this._comuna = nuevoComuna;
    };
    set city(nuevoCity){
        this._city = nuevoCity;
    };
    set phone(nuevoPhone){
        this._phone = nuevoPhone;
    };
};

module.exports = Direccion;
