'use strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var mdAuth = require('../middlewares/authenticated');

var api = express.Router();

api.post('/login', userController.loginUser);
api.post('/createUser', mdAuth.ensureAuth, userController.createUser);
<<<<<<< HEAD
api.delete('/deleteUser', userController.deleteUser);
api.put('/updateUser', mdAuth.ensureAuth, userController.updateUser);
api.get('/showUser', userController.showUser);
=======
api.delete('/deleteUser', mdAuth.ensureAuth, userController.deleteUser);
api.put('/updateUser', mdAuth.ensureAuth, userController.updateUser);
api.get('/showUser', mdAuth.ensureAuth, userController.showUser);
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

api.post('/createBook', mdAuth.ensureAuth, userController.createBook);
api.delete('/deleteBook', mdAuth.ensureAuth, userController.deleteBook);
api.put('/updateBook', mdAuth.ensureAuth, userController.updateBook);
<<<<<<< HEAD
api.get('/showBook', userController.showBook);
=======
api.get('/showBook', mdAuth.ensureAuth, userController.showBook);
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

api.post('/createMagazine', mdAuth.ensureAuth, userController.createMagazine);
api.delete('/deleteMagazine', mdAuth.ensureAuth, userController.deleteMagazine);
api.put('/updateMagazine', mdAuth.ensureAuth, userController.updateMagazine);
<<<<<<< HEAD
api.get('/showMagazine', userController.showMagazine);
=======
api.get('/showMagazine', mdAuth.ensureAuth, userController.showMagazine);
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

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