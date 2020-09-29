'use strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var mdAuth = require('../middlewares/authenticated');

var api = express.Router();

api.post('/login', userController.loginUser);
api.post('/createUser', mdAuth.ensureAuth, userController.createUser);
api.delete('/deleteUser', mdAuth.ensureAuth, userController.deleteUser);
api.put('/updateUser', mdAuth.ensureAuth, userController.updateUser);
api.get('/showUser', mdAuth.ensureAuth, userController.showUser);

api.post('/createBook', mdAuth.ensureAuth, userController.createBook);
api.delete('/deleteBook', mdAuth.ensureAuth, userController.deleteBook);
api.put('/updateBook', mdAuth.ensureAuth, userController.updateBook);
api.get('/showBook', mdAuth.ensureAuth, userController.showBook);

api.post('/createMagazine', mdAuth.ensureAuth, userController.createMagazine);
api.delete('/deleteMagazine', mdAuth.ensureAuth, userController.deleteMagazine);
api.put('/updateMagazine', mdAuth.ensureAuth, userController.updateMagazine);
api.get('/showMagazine', mdAuth.ensureAuth, userController.showMagazine);

api.post('/booksOrderBy', mdAuth.ensureAuth, userController.orderBooks);
api.post('/searchBook', mdAuth.ensureAuth, userController.searchBook);

api.post('/magazinesOrderBy', mdAuth.ensureAuth, userController.orderMagazines);
api.post('/searchMagazine', mdAuth.ensureAuth, userController.searchMagazine);
api.post('/loanBooks', mdAuth.ensureAuth, userController.loanBooks);
api.post('/loanMagazines', mdAuth.ensureAuth, userController.loanMagazines);

module.exports = api;