'use strict';

module.exports = function (app, q) {
    var User = app.db.User;

    app.controllers.users = {
        create: _create,
        all: _all,
        get: _get,
        edit: _edit,
        delete: _delete
    };

    function _create(req, res) {
        app.services.user.create(req)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

    function _all(req, res) {
        app.services.user.all(req)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

    function _get(req, res) {
        app.services.user.get(req.params.id)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

    function _edit(req, res) {
        app.services.user.edit(req.params.id, req.body)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

    function _delete(req, res) {
        app.services.user.delete(req.params.id)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

};
