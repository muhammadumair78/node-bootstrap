'use strict';

module.exports = function (app, q, jwt) {
    //var User = app.db.User;

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
        var access_token = req.body.token || req.query.token || req.headers['x-access-token'];
        var access_email = req.headers['x-email-address'];

        // decode token
        if (access_token && access_email) {

            // verifies secret and checks exp
            jwt.verify(access_token, app.tokenSecret, function(err, decoded) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    if(access_email === decoded.email){
                        req.decoded = decoded;
                        next();
                    } else {
                        return res.status(401).send({
                            success: false,
                            message: 'User email and token email do not match.'
                        });
                    }
                }
            });

        } else {
            return res.status(401).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }

};
