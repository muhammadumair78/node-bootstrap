'use strict';

module.exports = function (app, q) {
    app.controllers.welcome = {
        welcome: _welcome
    };

    function _welcome(req, res) {
        res.send({message: "welcome user"})
    }
};
