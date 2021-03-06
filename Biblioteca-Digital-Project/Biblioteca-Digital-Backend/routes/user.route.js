'use strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var mdAuth = require('../middlewares/authenticated');

var api = express.Router();

api.post('/login', userController.loginUser);
api.post('/createUser', mdAuth.ensureAuth, userController.createUser);
api.delete('/deleteUser', userController.deleteUser);
api.put('/updateUser', mdAuth.ensureAuth, userController.updateUser);
api.get('/showUser', userController.showUser);

api.post('/createBook', mdAuth.ensureAuth, userController.createBook);
api.delete('/deleteBook', mdAuth.ensureAuth, userController.deleteBook);
api.put('/updateBook', mdAuth.ensureAuth, userController.updateBook);
api.get('/showBook', userController.showBook);

api.post('/createMagazine', mdAuth.ensureAuth, userController.createMagazine);
api.delete('/deleteMagazine', mdAuth.ensureAuth, userController.deleteMagazine);
api.put('/updateMagazine', mdAuth.ensureAuth, userController.updateMagazine);
api.get('/showMagazine', userController.showMagazine);

api.post('/booksOrderBy', mdAuth.ensureAuth, userController.orderBooks);
api.post('/searchBook', mdAuth.ensureAuth, userController.searchBook);

api.post('/magazinesOrderBy', mdAuth.ensureAuth, userController.orderMagazines);
api.post('/searchMagazine', mdAuth.ensureAuth, userController.searchMagazine);
api.post('/loanBooks', mdAuth.ensureAuth, userController.loanBooks);
api.post('/loanMagazines', mdAuth.ensureAuth, userController.loanMagazines);
api.post('/returnBooks', mdAuth.ensureAuth, userController.returnBooks);
api.post('/returnMagazines', mdAuth.ensureAuth, userController.returnMagazine);

api.post('/booksReports', mdAuth.ensureAuth, userController.booksReports);
api.post('/magazinesReports', mdAuth.ensureAuth, userController.magazinesReports);

module.exports = api;