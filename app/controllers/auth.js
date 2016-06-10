'use strict';

module.exports = function (app, q, jwt) {
    var User = app.db.User;

    app.controllers.auth = {
        login: _login,
        checkToken: _checkToken
    };

    function _login(req, res) {
        app.services.auth.login(req.body)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (error) {
                res.send(error)
            })
    }

    function _checkToken(req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.tokenSecret, function(err, decoded) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(401).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }

};
