'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    carnet: Number,
    cui: Number,
    name: String,
    surname: String,
<<<<<<< HEAD
=======
    email: String, //no use in a other functions
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
    role: String, //estudiante catedratico administrador
    password: String,
    counterLoan: Number//-
});

module.exports = mongoose.model('user', userSchema);