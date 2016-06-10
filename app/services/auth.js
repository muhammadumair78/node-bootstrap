'use strict';

module.exports = function (app, q, jwt) {
    var User = app.db.User;
    app.services.auth = {
        login: _login
    };

    function _login(user) {
        var deferred = q.defer();

        User.findOne({
            emailAddress: user.email
        }, function(error, userObject) {

            if (error) {
                deferred.reject({
                    message: 'Error in getting USER',
                    error: error
                });
            } else {
                if (!userObject) {
                    deferred.reject({
                        message: 'Authentication failed. User not found.',
                        error: error
                    });
                } else if (userObject) {
                    if (userObject.password != user.password) {
                        deferred.reject({
                            message: 'Authentication failed. Wrong password.',
                            error: error
                        });
                    } else {
                        // create a token
                        var token = jwt.sign(user, app.tokenSecret, {
                            expiresInMinutes: app.tokenExpreTime
                        });

                        deferred.resolve({
                            success: true,
                            message: 'Login Successfull!',
                            token: token
                        });
                    }
                }
            }
        });

        return deferred.promise;
    }
};
