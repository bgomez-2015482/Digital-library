'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var magazineSchema = Schema({
    author: String,
    title: String,
    edition: String,
    description: String,
    frecuency: String,
    ejemplares: Number,
    themes: String,
    keywords: String,
    copies: Number,
    avaliable: Number,
    searchCounter: Number,
    counterLoan: Number
});

module.exports = mongoose.model('magazine', magazineSchema);