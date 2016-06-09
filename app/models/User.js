'use strict';

module.exports = function (app, db) {
    var _Schema = db.Schema,
        uniqueValidator = require('mongoose-unique-validator');

    var _UserSchema = new _Schema({
            name: {type: String},
            about: {type: String},
            phoneNumber: {type: String},
            username: {type: String},
            password: {type: String},
            emailAddress: {type: String, unique: true}
        }
    );

    var _User = db.model('User', _UserSchema);
    app.db.User = _User;
};
