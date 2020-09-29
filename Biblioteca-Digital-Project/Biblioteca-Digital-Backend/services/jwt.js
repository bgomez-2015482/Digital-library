'use strict'

var jwt = require('jwt-simple');
var moment= require('moment');
var key = 'EncriptionK';

exports.createToken = (user) => {
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        counterLoan: user.counterLoan,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(90, "days").unix()
    };
    return jwt.encode(payload, key);
}