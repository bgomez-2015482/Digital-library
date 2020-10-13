'use strict'

var User = require("../models/user.model");
var Book = require("../models/book.model");
var Magazine = require("../models/magazine.model");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("../services/jwt");
<<<<<<< HEAD

const userAdmin = {
    cui: "2015482",
    name: "admin",
    surname: "admin",
    role: "admin",
=======
const bookModel = require("../models/book.model");

const userAdmin = {
    carnetOrCui: "2015482",
    name: "admin",
    surname: "admin",
    email: "admin@kinal.com",
    role: "administrador",
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
    password: "admin"
};

var saveAdmin = new User(userAdmin);

if (saveAdmin && saveAdmin.length >= 1) {

} else {
    bcrypt.hash(userAdmin.password, null, null, (err, passwordHash) => {
        saveAdmin.password = passwordHash;
    });
<<<<<<< HEAD
    //saveAdmin.save();
=======
    saveAdmin.save();
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

//USER CRUD

function loginUser(req, res) {
    var params = req.body;

<<<<<<< HEAD
    if (params.name) {
=======
    if (params.name || params.email) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        if (params.password) {
            User.findOne({
                    $or: [{
                            name: params.name,
                        },
<<<<<<< HEAD
=======
                        {
                            email: params.email,
                        },
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
                    ],
                },
                (err, check) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error general'
                        });
                    } else if (check) {
                        bcrypt.compare(
                            params.password,
                            check.password,
                            (err, passwordOk) => {
                                if (err) {
                                    res.status(500).send({
                                        message: 'Error al comparar'
                                    });
                                } else if (passwordOk) {
                                    if (params.getToken == 'true') {
                                        res.send({
                                            token: jwt.createToken(check),
                                            user: check.name
                                        });
                                    } else {
                                        res.send({
                                            message: 'Error en el servidor al generar la autenticación'
                                        });
                                    }
                                } else {
                                    res.send({
                                        message: 'Contraseña incorrecta'
                                    });
                                }
                            }
                        );
                    } else {
                        res.send({
                            message: 'Datos de usuario incorrectos'
                        });
                    }
                }
            );
        } else {
            res.send({
                message: 'Ingresa tu contraseña'
            });
        }
    } else {
        res.send({
            message: 'Ingresa tu correo o nombre de usuario'
        });
    }
<<<<<<< HEAD
=======

>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function createUser(req, res) {
    var params = req.body;
    var user = new User();
    var rolles = params.role;
<<<<<<< HEAD


    if( user.carnet = params.carnet,
        user.name = params.name,
        user.surname = params.surname,
        user.role = params.role,
        user.password = params.password){
            User.findOne({$or:[{carnet: user.carnet}]}, (err, userFind)=>{
                if(err){
                    res.status(500).send({message: 'Error general, intentelo mas tarde'})
                }else if(userFind){
                    res.send({message: 'usuario o correo ya utilizado'});
                }else{
                    bcrypt.hash(params.password, null, null, (err, passwordHash)=>{
                        if(err){
                            res.status(500).send({message: 'Error al encriptar contraseña'});
                        }else if(passwordHash){
                            user.password = passwordHash;

                            user.save((err, userSaved)=>{
                                if(err){
                                    res.status(500).send({message: 'Error general al guardar usuario'});
                                }else if(userSaved){
                                    res.send({user: userSaved});
                                }else{
                                    res.status(404).send({message: 'Usuario no guardado'});
                                }
                            });
                        }else{
                            res.status(418).send({message: 'Error inesperado'});
                        }
                    });
                }
            });
    }else{
        res.send({message: 'Ingresa todos los datos'});
    }
   /* if ('admin' == req.user.role) {
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        if ('admin' == rolles) {
            user.name = params.name,
                user.role = params.role,
                user.password = params.password

            User.find({
                $or: [{
                    name: user.name
                }]
            }).exec((err, adminSuccess) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (adminSuccess && adminSuccess.length >= 1) {
                    return res.status(500).send({
                        message: 'El usuario ya existe'
                    });
                } else {
                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        user.password = hash;
                        user.save((err, adminSave) => {
                            if (err) return res.status(500).send({
                                message: 'Error en la petición'
                            })
                            if (!adminSave)
                                return res.status(404).send({
                                    message: 'Error al guardar'
                                });
                            return res.status(200).send({
                                admin: adminSave
                            });
                        })
                    })
                }
            })

        } else if ('catedrático' == rolles) {
            user.cui = params.cui,
                user.name = params.name,
                user.surname = params.surname,
                user.role = params.role,
                user.password = params.password
            user.counterLoan = 0;

            User.find({
                $or: [{
                    cui: user.cui
                }]
            }).exec((err, cateSuccess) => {
                if (err)
                    return res.status(500).send({
                        message: 'Error en la petición'
                    });
                if (cateSuccess && cateSuccess.length >= 1) {
                    return res.status(500).send({
                        message: 'El catedrático ya existe'
                    });
                } else {
                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        user.password = hash;
                        user.save((err, cateSave) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición'
                            });
                            if (!cateSave)
                                return res.status(404).send({
                                    message: 'Error al guardar'
                                });
                            return res.status(200).send({
                                catedratico: cateSave
                            });
                        })
                    })
                }
            })
        } else if ('estudiante' == rolles) {
            user.carnet = params.carnet,
                user.name = params.name,
                user.surname = params.surname,
                user.role = params.role,
                user.password = params.password,
                user.counterLoan = 0;

            User.find({
                $or: [{
                    carnet: user.carnet
                }]
            }).exec((err, estSuccess) => {
                if (err)
                    return res.status(500).send({
                        message: 'Error en la petición'
                    });
                if (estSuccess && estSuccess.length >= 1) {
                    return res.status(500).send({
                        message: 'El estudiante ya existe'
                    });
                } else {
                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        user.password = hash;
                        user.save((err, estSuccess) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición'
                            });
                            if (!estSuccess)
                                return res.status(404).send({
                                    message: 'Error al guardar'
                                });
                            return res.status(200).send({
                                estudiante: estSuccess
                            });
                        })
                    })
                }
            })
        } else {
            return res.status(500).send({
                message: 'No existe el rol'
            });
        }
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
<<<<<<< HEAD
    }*/
=======
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function deleteUser(req, res) {
    var params = req.body;
<<<<<<< HEAD
    /*if ('admin' == req.user.role) {*/
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        User.findById(params._id, (err, userFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!userFind) res.status(500).send({
                message: 'No se encontro el usuario'
            });
            userFind.remove((err, userRemoved) => {
                if (err) return res.status(500).send({
                    message: 'Error en la petición 2'
                });
                return res.status(200).send({
                    message: 'Se ha eliminado el siguiente usuario',
                    userRemoved
                });
            })
        })
<<<<<<< HEAD
    /*} else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }*/
=======
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function updateUser(req, res) {
    var params = req.body;
    var user = new User();
    var rolles = params.role;

<<<<<<< HEAD
    /*if ('admin' == req.user.role) {*/
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        User.findById(params._id, (err, userFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!userFind) return res.status(500).send({
                message: 'Los datos no coinciden'
            });
            if ('admin' == rolles) {
                User.findByIdAndUpdate(params._id, {
                    name: params.name,
                    role: rolles,
                    password: params.password
                }, {
                    new: true
                }, (err, adminUpdated) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición'
                    });
                    if (!adminUpdated) res.status(500).send({
                        message: 'No se encontro el usuario'
                    });
                    return res.status(200).send({
                        update: adminUpdated
                    });

                })
            } else if ('catedrático' == rolles) {
                User.findByIdAndUpdate(params._id, {
                    cui: params.cui,
                    name: params.name,
                    surname: params.surname,
                    role: rolles,
                    password: params.password
                }, {
                    new: true
                }, (err, cateUpdated) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición'
                    });
                    if (!cateUpdated) res.status(500).send({
                        message: 'No se encontro el catedrático'
                    });
                    return res.status(200).send({
                        update: cateUpdated
                    });
                })
            } else if ('estudiante' == rolles) {
                User.findByIdAndUpdate(params._id, {
                    carnet: params.carnet,
                    name: params.name,
                    surname: params.surname,
                    role: rolles,
                    password: params.password
                }, {
                    new: true
                }, (err, estUpdated) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición'
                    });
                    if (!estUpdated) res.status(500).send({
                        message: 'No se encontro el estudiante'
                    });
                    return res.status(200).send({
                        update: estUpdated
                    });
                })
            } else {
                return res.status(500).send({
                    message: 'No existe el rol'
                });
            }

        })
<<<<<<< HEAD
    /*} else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }*/
=======
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function showUser(req, res) {
    var params = req.body;
<<<<<<< HEAD
   // if ('admin' == req.user.role) {
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        User.find((err, userFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!userFind) return res.status(404).send({
                message: 'No se han podido mostrar los registros'
            });
            return res.status(200).send({
<<<<<<< HEAD
                users: userFind
            });
        })
    /*} else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
}*/
=======
                Mostrar: userFind
            });
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

//BOOK CRUD

function createBook(req, res) {
    var params = req.body;
    var book = new Book();
    var rolles = params.role;
<<<<<<< HEAD

    if(book.author = params.author,
        book.title = params.title,
        book.edition = params.edition,
        book.keywords = params.keywords,
        book.description = params.description,
        book.themes = params.themes,
        book.copies = params.copies,
        book.avaliable = params.avaliable/*,
        book.searchCounter = 0,
        book.counterLoan = 0*/
        ){
            Book.findOne({$or: [{title: book.title}]}, (err, bookFind)=>{
                if(err){
                res.status(500).send({message: 'Error general, intentelo mas tarde'})
                }else if(bookFind){
                    res.send({message: 'El libro ya existe'});
                }else{
                    book.save((err, bookSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al guardar libro'});
                        }else if(bookSaved){
                            res.send({book: bookSaved});
                        }else{
                            res.status(404).send({message: 'Usuario no guardado'});
                        }
                    });
                }
            });
        }else{
            res.send({message: 'Ingresa todos los datos'});
        }
    /*if ('admin' == req.user.role) {
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        if (params.author &&
            params.title &&
            params.edition &&
            params.keywords &&
            params.description &&
            params.themes &&
            params.copies) {
            book.author = params.author,
                book.title = params.title,
                book.edition = params.edition,
                book.keywords = params.keywords,
                book.description = params.description,
                book.themes = params.themes,
                book.copies = params.copies,
                book.avaliable = params.copies,
                book.searchCounter = 0,
                book.counterLoan = 0

            Book.find({
                $or: [{
                    title: book.title
                }]
            }).exec((err, bookSuccess) => {
                if (err)
                    return res.status(500).send({
                        message: 'Error en la petición'
                    });
                if (bookSuccess && bookSuccess.length >= 1) {
                    return res.status(500).send({
                        message: 'El libro ya existe'
                    });
                } else {
                    book.save((err, saveBook) => {
                        if (err) return res.status(500).send({
                            message: 'Error en la petición'
                        });
                        if (!saveBook)
                            return res.status(404).send({
                                message: 'Error al guardar'
                            });
                        return res.status(200).send({
                            libro: saveBook
                        });
                    })
                }
            })
        } else {
            return res.status(500).send({
                message: 'Debe llenar todos los campos'
            });
        }
<<<<<<< HEAD
    /*} else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }*/
=======
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function deleteBook(req, res) {
    var params = req.body;
    if ('admin' == req.user.role) {
        Book.findById(params._id, (err, bookFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookFind) res.status(500).send({
                message: 'No se encontro el libro'
            });
            bookFind.remove((err, bookRemoved) => {
                if (err) return res.status(500).send({
                    message: 'Error en la petición 2'
                });
                return res.status(200).send({
                    message: 'Se ha eliminado el siguiente libro',
                    bookRemoved
                });
            })
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
}

function updateBook(req, res) {
    var params = req.body;
    var book = new Book();

    if ('admin' == req.user.role) {
        Book.findById(params._id, (err, bookFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookFind) return res.status(500).send({
                message: 'El libro no existe'
            });
            Book.findByIdAndUpdate(bookFind._id, {
                author: params.author,
                title: params.title,
                edition: params.edition,
                keywords: params.keywords,
                description: params.description,
                themes: params.themes,
                copies: params.copies,
                avaliable: params.avaliable
            }, {
                new: true
            }, (err, bookUpdated) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!bookUpdated) res.status(500).send({
                    message: 'No se guardo el libro'
                });
                return res.status(200).send({
                    update: bookUpdated
                });
            })
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
}

function showBook(req, res) {
    var params = req.body;
<<<<<<< HEAD
    /*if ('admin' == req.user.role) {*/
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        Book.find((err, bookFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookFind) return res.status(404).send({
                message: 'No se han podido mostrar los registros'
            });
            return res.status(200).send({
<<<<<<< HEAD
                books: bookFind
            });
        })
    /*} else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }*/
=======
                Mostrar: bookFind
            });
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

//MAGAZINE CRUD

function createMagazine(req, res) {
    var params = req.body;
    var magazine = new Magazine();
    var rolles = params.role;
<<<<<<< HEAD

    if(magazine.author = params.author,
        magazine.title = params.title,
        magazine.edition = params.edition,
        magazine.description = params.description,
        magazine.frecuency = params.frecuency,
        magazine.ejemplares = params.ejemplares,
        magazine.themes = params.themes,
        magazine.keywords = params.keywords,
        magazine.copies = params.copies,
        magazine.avaliable = params.avaliable){
            Magazine.findOne({$or: [{title: magazine.title}]}, (err, magazineFind)=>{
                if(err){
                    res.statuss(500).send({message: 'Error general, intentelo mas tarde'});
                }else if(magazineFind){
                    res.send({message: 'La revista ya existe'});
                }else{
                    magazine.save((err, magazineSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al guardar revista'});
                        }else if(magazineSaved){
                            res.send({magazine: magazineSaved});
                        }else{
                            res.status(404).send({message: 'Revista no guardada'});
                        }
                    });
                }
            });
        }else{
            res.send({message: 'Ingrese todos los datos'});
        }
    /*if ('admin' == req.user.role) {
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        if (params.author &&
            params.title &&
            params.edition &&
            params.description &&
            params.frecuency &&
            params.ejemplares &&
            params.themes &&
            params.keywords &&
            params.copies) {
            magazine.author = params.author,
                magazine.title = params.title,
                magazine.edition = params.edition,
                magazine.description = params.description,
                magazine.frecuency = params.frecuency,
                magazine.ejemplares = params.ejemplares,
                magazine.themes = params.themes,
                magazine.keywords = params.keywords,
                magazine.copies = params.copies,
                magazine.avaliable = params.copies,
                magazine.searchCounter = 0,
                magazine.counterLoan = 0

            Magazine.find({
                $or: [{
                    title: magazine.title
                }]
            }).exec((err, magazineSuccess) => {
                if (err) return res.status(500).send({
                    message: 'Error en la petición'
                });
                if (magazineSuccess && magazineSuccess.length >= 1) {
                    return res.status(500).send({
                        message: 'La revista ya existe'
                    });
                } else {
                    magazine.save((err, saveMagazine) => {
                        if (err) return res.status(500).send({
                            message: 'Error en la petición'
                        });
                        if (!saveMagazine)
                            return res.status(404).send({
                                message: 'Error al guardar'
                            });
                        return res.status(200).send({
                            revista: saveMagazine
                        });
                    })
                }
            })
        }
<<<<<<< HEAD
    }*/
=======
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

function deleteMagazine(req, res) {
    var params = req.body;
    if ('admin' == req.user.role) {
        Magazine.findById(params._id, (err, magazineFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineFind) return res.status(500).send({
                message: 'No se encontró la revista'
            });
            magazineFind.remove((err, magazineRemoved) => {
                if (err) return res.status(500).send({
                    message: 'Error en la petición 2'
                });
                return res.status(200).send({
                    message: 'Se ha eliminado la siguiente revista',
                    magazineRemoved
                });
            })
        })
    }
}

function updateMagazine(req, res) {
    var params = req.body;
    var magazine = new Magazine();

    if ('admin' == req.user.role) {
        Magazine.findById(params._id, (err, magazineFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineFind) return res.status(500).send({
                message: 'La revista no existe'
            });
            Magazine.findByIdAndUpdate(magazineFind._id, {
                author: params.author,
                title: params.title,
                edition: params.edition,
                description: params.description,
                frecuency: params.frecuency,
                ejemplares: params.ejemplares,
                themes: params.themes,
                keywords: params.keywords,
                copies: params.copies,
                avaliable: params.avaliable
            }, {
                new: true
            }, (err, magazineUpdated) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!magazineUpdated) res.status(500).send({
                    message: 'No se guardo la revista'
                });
                return res.status(200).send({
                    update: magazineUpdated
                });
            })
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
}

function showMagazine(req, res) {
<<<<<<< HEAD
   /* if ('admin' == req.user.role) {*/
=======
    if ('admin' == req.user.role) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        Magazine.find((err, magazineFind) => {
            if (err) return res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineFind) return res.status(404).send({
                message: 'No se han podido mostrar los registros'
            });
            return res.status(200).send({
<<<<<<< HEAD
                magazines: magazineFind
            });
        })
   /* } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }*/
=======
                Mostrar: magazineFind
            });
        })
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}

//ORDER BOOKS

function orderBooks(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();
    var order = params.order.toUpperCase();

    if ('ID' == filter) {
        if ('ASCENDENT' == order) {

            Book.find().sort({
                _id: 1
            }).exec(function (err, ascendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentBook
                });
            })

        } else if ('DESCENDENT' == order) {

            Book.find().sort({
                _id: -1
            }).exec(function (err, descendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentBook
                });
            })
        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }

    } else if ('COPIES' == filter) {
        if ('ASCENDENT' == order) {

            Book.find().sort({
                _id: 1
            }).exec(function (err, ascendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentBook
                });
            })

        } else if ('DESCENDENT' == order) {
            Book.find().sort({
                _id: -1
            }).exec(function (err, descendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentBook
                });
            })
        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }

    } else if ('AVALIABLE' == filter) {
        if ('ASCENDENT' == order) {

            Book.find().sort({
                _id: 1
            }).exec(function (err, ascendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentBook
                });
            })

        } else if ('DESCENDENT' == order) {

            Book.find().sort({
                _id: -1
            }).exec(function (err, descendentBook) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentBook)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentBook
                });
            })

        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }
    } else {
        return res.status(500).send({
            message: 'La opción no es valida'
        });
    }
}

//ORDER MAGAZINES

function orderMagazines(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();
    var order = params.order.toUpperCase();

    if ('ID' == filter) {
        if ('ASCENDENT' == order) {

            Magazine.find().sort({
                _id: 1
            }).exec(function (err, ascendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentMagazine
                });
            })

        } else if ('DESCENDENT' == order) {

            Magazine.find().sort({
                _id: -1
            }).exec(function (err, descendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentMagazine
                });
            })
        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }

    } else if ('COPIES' == filter) {
        if ('ASCENDENT' == order) {

            Magazine.find().sort({
                _id: 1
            }).exec(function (err, ascendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentMagazine
                });
            })

        } else if ('DESCENDENT' == order) {

            Magazine.find().sort({
                _id: -1
            }).exec(function (err, descendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentMagazine
                });
            })

        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }

    } else if ('AVALIABLE' == filter) {
        if ('ASCENDENT' == order) {

            Magazine.find().sort({
                _id: 1
            }).exec(function (err, ascendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!ascendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: ascendentMagazine
                });
            })

        } else if ('DESCENDENT' == order) {

            Magazine.find().sort({
                _id: -1
            }).exec(function (err, descendentMagazine) {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!descendentMagazine)
                    return res.status(404).send({
                        message: 'Error al ordenar'
                    });
                return res.status(200).send({
                    OrderBy: descendentMagazine
                });
            })

        } else {
            return res.status(500).send({
                message: 'La opción no es valida'
            });
        }

    } else {
        return res.status(500).send({
            message: 'La opción no es valida'
        });
    }
}


//SEARCH BOOK

function searchBook(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();

    if ('TITLE' == filter) {
        Book.findOne({
            title: params.title
        }, (err, bookSearch) => {
            var counter = bookSearch.searchCounter;
            Book.findByIdAndUpdate(bookSearch._id, {
                searchCounter: ++counter
            }, {
                new: true
            }, (err, updateCounter) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
            })
        })
        Book.find({
            title: params.title
        }, (err, bookSearch2) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookSearch2) res.status(500).send({
                message: 'No se encontro el libro'
            });
            return res.status(200).send({
                search: bookSearch2
            });
        })
    } else if ('KEYWORDS' == filter) {
        Book.findOne({
            keywords: params.keywords
        }, (err, bookSearch) => {
            var counter = bookSearch.searchCounter;
            Book.findByIdAndUpdate(bookSearch._id, {
                searchCounter: ++counter
            }, {
                new: true
            }, (err, updateCounter) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
            })
        })
        Book.find({
            keywords: params.keywords
        }, (err, bookSearch2) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookSearch2) res.status(500).send({
                message: 'No se encontro el libro'
            });
            return res.status(200).send({
                search: bookSearch2
            });
        })
    } else {
        return res.status(500).send({
            message: 'La opción no es valida'
        });
    }
}

//SEARCH MAGAZINE

function searchMagazine(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();

    if ('TITLE' == filter) {
        Magazine.findOne({
            title: params.title
        }, (err, magazineSearch) => {
            var counter = magazineSearch.searchCounter;
            Magazine.findByIdAndUpdate(magazineSearch._id, {
                searchCounter: ++counter
            }, {
                new: true
            }, (err, updateCounter) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
            })
        })
        Magazine.find({
            title: params.title
        }, (err, magazineSearch2) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineSearch2) res.status(500).send({
                message: 'No se encontro el libro'
            });
            return res.status(200).send({
                search: magazineSearch2
            });
        })
    } else if ('KEYWORDS' == filter) {
        Magazine.findOne({
            keywords: params.keywords
        }, (err, magazineSearch) => {
            var counter = magazineSearch.searchCounter;
            Magazine.findByIdAndUpdate(magazineSearch._id, {
                searchCounter: ++counter
            }, {
                new: true
            }, (err, updateCounter) => {
                if (err) res.status(500).send({
                    message: 'Error en la petición'
                });
            })
        })
        Magazine.find({
            keywords: params.keywords
        }, (err, magazineSearch2) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineSearch2) res.status(500).send({
                message: 'No se encontro el libro'
            });
            return res.status(200).send({
                search: magazineSearch2
            });
        })
    } else {
        return res.status(500).send({
            message: 'La opción no es valida'
        });
    }
}

//USER NORMAL

//LOAN BOOK

function loanBooks(req, res) {
    var params = req.body;
    if ('admin' != req.user.role) {
        Book.find({
            title: params.title
        }, (err, bookFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookFind) res.status(500).send({
                message: 'No se encontro el libro'
            });
            if (req.user.counterLoan >= 0 || req.user.counterLoan >= 10) {

                Book.findOne({
                    title: params.title
                }, (err, bookFinded) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición 2'
                    });
                    if (!bookFinded) res.status(500).send({
                        message: 'No se encontro el libro'
                    });
                    if (bookFinded.avaliable >= 1) {
                        Book.findByIdAndUpdate(bookFinded._id, {
                            avaliable: bookFinded.avaliable - 1,
                            searchCounter: bookFinded.searchCounter + 1,
                            counterLoan: bookFinded.counterLoan + 1
                        }, {
                            new: true
                        }, (err, bookUpdate) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición 3'
                            });
                            if (!bookUpdate) res.status(500).send({
                                message: 'No se actualizo el libro'
                            });

                            User.findById(req.user.sub, (err, userSearch) => {
                                if (err) res.status(500).send({
                                    message: 'Error en la petición 4'
                                });
                                if (!userSearch) res.status(500).send({
                                    message: 'No se encontro el usuario'
                                });
                                var loanPlus = userSearch.counterLoan;
                                User.findByIdAndUpdate(req.user.sub, {
                                    counterLoan: ++loanPlus
                                }, {
                                    new: true
                                }, (err, userUpdated) => {
                                    if (err) res.status(500).send({
                                        message: 'Error en la petición 5'
                                    });
                                    if (!userUpdated) res.status(500).send({
                                        message: 'No se actualizo el usuario'
                                    });
                                    return res.status(200).send({
                                        loan: bookUpdate
                                    });
                                })
                            })
                        })
                    } else {
                        return res.status(500).send({
                            message: 'No hay en stock'
                        });
                    }
                })

            } else {
                return res.status(500).send({
                    message: 'Ya ha cumplido con el máximo de prestamos'
                });
            }
        })
    } else {
        return res.status(500).send({
            message: 'Administrador no puede realizar esta acción'
        });
    }
}

///LOAN MAGAZINE

function loanMagazines(req, res) {
    var params = req.body;
    if ('admin' != req.user.role) {
        Magazine.find({
            title: params.title
        }, (err, magazineFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineFind) res.status(500).send({
                message: 'No se encontro la revista'
            });
            if (req.user.counterLoan >= 0 || req.user.counterLoan >= 10) {

                Magazine.findOne({
                    title: params.title
                }, (err, magazineFinded) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición 2'
                    });
                    if (!magazineFinded) res.status(500).send({
                        message: 'No se encontro la revista'
                    });
                    if (magazineFinded.avaliable >= 1) {
                        Magazine.findByIdAndUpdate(magazineFinded._id, {
                            avaliable: magazineFinded.avaliable - 1,
                            searchCounter: magazineFinded.searchCounter + 1,
                            counterLoan: magazineFinded.counterLoan + 1
                        }, {
                            new: true
                        }, (err, magazineUpdate) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición 3'
                            });
                            if (!magazineUpdate) res.status(500).send({
                                message: 'No se actualizo la revista'
                            });

                            User.findById(req.user.sub, (err, userSearch) => {
                                if (err) res.status(500).send({
                                    message: 'Error en la petición 4'
                                });
                                if (!userSearch) res.status(500).send({
                                    message: 'No se encontro el usuario'
                                });
                                var loanPlus = userSearch.counterLoan;
                                User.findByIdAndUpdate(req.user.sub, {
                                    counterLoan: ++loanPlus
                                }, {
                                    new: true
                                }, (err, userUpdated) => {
                                    if (err) res.status(500).send({
                                        message: 'Error en la petición 5'
                                    });
                                    if (!userUpdated) res.status(500).send({
                                        message: 'No se actualizo el usuario'
                                    });
                                    return res.status(200).send({
                                        loan: magazineUpdate
                                    });
                                })
                            })
                        })
                    } else {
                        return res.status(500).send({
                            message: 'No hay en stock'
                        });
                    }
                })

            } else {
                return res.status(500).send({
                    message: 'Ya ha cumplido con el máximo de prestamos'
                });
            }
        })
    } else {
        return res.status(500).send({
            message: 'Administrador no puede realizar esta acción'
        });
    }
}

//RETURN BOOK

function returnBooks(req, res) {
    var params = req.body;
    if ('admin' != req.user.role) {
        Book.find({
            title: params.title
        }, (err, bookFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!bookFind) res.status(500).send({
                message: 'No se encontro el libro'
            });
            if (req.user.counterLoan >= 0 || req.user.counterLoan >= 10) {

                Book.findOne({
                    title: params.title
                }, (err, bookFinded) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición 2'
                    });
                    if (!bookFinded) res.status(500).send({
                        message: 'No se encontro el libro'
                    });
                    if (bookFinded.avaliable >= 1) {
                        Book.findByIdAndUpdate(bookFinded._id, {
                            avaliable: bookFinded.avaliable + 1,
                            searchCounter: bookFinded.searchCounter + 1,
                            counterLoan: bookFinded.counterLoan - 1
                        }, {
                            new: true
                        }, (err, bookUpdate) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición 3'
                            });
                            if (!bookUpdate) res.status(500).send({
                                message: 'No se actualizo el libro'
                            });

                            User.findById(req.user.sub, (err, userSearch) => {
                                if (err) res.status(500).send({
                                    message: 'Error en la petición 4'
                                });
                                if (!userSearch) res.status(500).send({
                                    message: 'No se encontro el usuario'
                                });
                                var loanLess = userSearch.counterLoan;
                                User.findByIdAndUpdate(req.user.sub, {
                                    counterLoan: --loanLess
                                }, {
                                    new: true
                                }, (err, userUpdated) => {
                                    if (err) res.status(500).send({
                                        message: 'Error en la petición 5'
                                    });
                                    if (!userUpdated) res.status(500).send({
                                        message: 'No se actualizo el usuario'
                                    });
                                    return res.status(200).send({
                                        return: bookUpdate
                                    });
                                })
                            })
                        })
                    } else {
                        return res.status(500).send({
                            message: 'No hay en stock'
                        });
                    }
                })

            } else {
                return res.status(500).send({
                    message: 'Ya ha cumplido con el máximo de prestamos'
                });
            }
        })
    } else {
        return res.status(500).send({
            message: 'Administrador no puede realizar esta acción'
        });
    }
}

//RETURN MAGAZINE

function returnMagazine(req, res) {
    var params = req.body;
    if ('admin' != req.user.role) {
        Magazine.find({
            title: params.title
        }, (err, magazineFind) => {
            if (err) res.status(500).send({
                message: 'Error en la petición'
            });
            if (!magazineFind) res.status(500).send({
                message: 'No se encontro la revista'
            });
            if (req.user.counterLoan >= 0 || req.user.counterLoan >= 10) {

                Magazine.findOne({
                    title: params.title
                }, (err, magazineFinded) => {
                    if (err) res.status(500).send({
                        message: 'Error en la petición 2'
                    });
                    if (!magazineFinded) res.status(500).send({
                        message: 'No se encontro la revista'
                    });
                    if (magazineFinded.avaliable >= 1) {
                        Magazine.findByIdAndUpdate(magazineFinded._id, {
                            avaliable: magazineFinded.avaliable + 1,
                            searchCounter: magazineFinded.searchCounter + 1,
                            counterLoan: magazineFinded.counterLoan - 1
                        }, {
                            new: true
                        }, (err, magazineUpdate) => {
                            if (err) res.status(500).send({
                                message: 'Error en la petición 3'
                            });
                            if (!magazineUpdate) res.status(500).send({
                                message: 'No se actualizo la revista'
                            });

                            User.findById(req.user.sub, (err, userSearch) => {
                                if (err) res.status(500).send({
                                    message: 'Error en la petición 4'
                                });
                                if (!userSearch) res.status(500).send({
                                    message: 'No se encontro el usuario'
                                });
                                var loanLess = userSearch.counterLoan;
                                User.findByIdAndUpdate(req.user.sub, {
                                    counterLoan: --loanLess
                                }, {
                                    new: true
                                }, (err, userUpdated) => {
                                    if (err) res.status(500).send({
                                        message: 'Error en la petición 5'
                                    });
                                    if (!userUpdated) res.status(500).send({
                                        message: 'No se actualizo el usuario'
                                    });
                                    return res.status(200).send({
                                        return: magazineUpdate
                                    });
                                })
                            })
                        })
                    } else {
                        return res.status(500).send({
                            message: 'No hay en stock'
                        });
                    }
                })

            } else {
                return res.status(500).send({
                    message: 'Ya ha cumplido con el máximo de prestamos'
                });
            }
        })
    } else {
        return res.status(500).send({
            message: 'Administrador no puede realizar esta acción'
        });
    }
}

//REPORTS

//BOOK REPORTS

function booksReports(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();

    if ('admin' == req.user.role) {
        if ('LIBROS MAS PRESTADOS' == filter) {
            Book.find().sort({
                counterLoan: -1
            }).exec(function (err, orderBooks) {
                if (err) return res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!orderBooks) return res.status(404).send({
                    message: 'No se ha podido mostrar'
                });
                return res.status(200).send({
                    Ordered: orderBooks
                });

            })
        } else if ('LIBROS MÁS BUSCADOS') {
            Book.find().sort({
                searchCounter: -1
            }).exec(function (err, orderBooks) {
                if (err) return res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!orderBooks) return res.status(404).send({
                    message: 'No se ha podido mostrar'
                });
                return res.status(200).send({
                    Ordered: orderBooks
                });

            })
        } else {
            return res.status(500).send({
                message: 'La opción no es válida'
            });
        }
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
}

//MAGAZINE REPORTS

function magazinesReports(req, res) {
    var params = req.body;
    var filter = params.filter.toUpperCase();

    if ('admin' == req.user.role) {
        if ('REVISTAS MAS PRESTADAS' == filter) {
            Magazine.find().sort({
                counterLoan: -1
            }).exec(function (err, orderMagazines) {
                if (err) return res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!orderMagazines) return res.status(404).send({
                    message: 'No se ha podido mostrar'
                });
                return res.status(200).send({
                    Ordered: orderMagazines
                });

            })
        } else if ('REVISTAS MÁS BUSCADAS') {
            Magazine.find().sort({
                searchCounter: -1
            }).exec(function (err, orderMagazines) {
                if (err) return res.status(500).send({
                    message: 'Error en la petición'
                });
                if (!orderMagazines) return res.status(404).send({
                    message: 'No se ha podido mostrar'
                });
                return res.status(200).send({
                    Ordered: orderMagazines
                });

            })
        } else {
            return res.status(500).send({
                message: 'La opción no es válida'
            });
        }
    } else {
        return res.status(500).send({
            message: 'Solo el admin puede realizar esta acción'
        });
    }
}

module.exports = {
    loginUser,
    createUser,
    deleteUser,
    updateUser,
    showUser,
    createBook,
    deleteBook,
    updateBook,
    showBook,
    orderBooks,
    searchBook,
    createMagazine,
    deleteMagazine,
    updateMagazine,
    showMagazine,
    orderMagazines,
    searchMagazine,
    loanBooks,
    loanMagazines,
    returnBooks,
    returnMagazine,
    booksReports,
    magazinesReports
};