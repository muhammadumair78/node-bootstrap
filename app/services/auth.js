'use strict';

module.exports = function (app, q, jwt) {
    var User = app.db.User;
    app.services.auth = {
        login: _login,
        register: _register
    };

    function _register(user) {
        var deferred = q.defer();

        var newUser = new User();
        newUser.name = user.name;
        newUser.about = user.about;
        newUser.phoneNumber = user.phoneNumber;
        newUser.username = user.username;
        newUser.password = user.password;
        newUser.emailAddress = user.emailAddress;

        newUser.save(function (error) {
            if (error) {
                deferred.reject({
                    message: 'Error in Creating new USER.',
                    error: error
                });
            } else {
                deferred.resolve({
                    message: 'Successfully Created USER'
                });
            }
        });

        return deferred.promise;
    }

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
                            token: token,
                            user: userObject
                        });
                    }
                }
            }
        });

        return deferred.promise;
    }
};
