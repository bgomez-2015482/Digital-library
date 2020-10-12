'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = Schema({
    author: String,
    title: String,
    edition: String,
    keywords: String,
    description: String,
    themes: String,
    copies: Number,
    avaliable: Number,//+
    searchCounter: Number,//+
    counterLoan: Number//-
});

module.exports = mongoose.model('book', bookSchema);