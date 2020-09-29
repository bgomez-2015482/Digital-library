'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    carnet: Number,
    cui: Number,
    name: String,
    surname: String,
    email: String, //no use in a other functions
    role: String, //estudiante catedratico administrador
    password: String,
    counterLoan: Number//-
});

module.exports = mongoose.model('user', userSchema);