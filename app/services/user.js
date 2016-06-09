'use strict';

module.exports = function (app, q) {
    var User = app.db.User;
    app.services.user = {
        create: _create,
        all: _all,
        get: _get,
        edit: _edit,
        delete: _delete
    };


    function _create(req) {
        var deferred = q.defer();
        
        var newUser = new User();
        newUser.name = req.body.name;
        newUser.about = req.body.about;
        newUser.phoneNumber = req.body.phoneNumber;
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.emailAddress = req.body.emailAddress;
        
        newUser.save(function (error) {
            if (error) {
                deferred.reject({
                    message: 'Error in get USER API',
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

    function _all(req) {
        var deferred = q.defer();

        User.find(function(error, users) {
            if (error) {
                deferred.reject({
                    message: 'Error in get USER API',
                    error: error
                });
            } else {
                deferred.resolve({
                    data: users
                });
            }
        });
        return deferred.promise;
    }

    function _get(id) {
        var deferred = q.defer();

        User.findById(id, function(error, user) {
            if (error) {
                deferred.reject({
                    message: 'Error in get USER API',
                    error: error
                });
            } else {
                deferred.resolve({
                    data: user
                });
            }
        });
        return deferred.promise;
    }

    function _edit(id, updatedUser) {
        var deferred = q.defer();

        User.findById(id, function(error, user) {
            if (error) {
                deferred.reject({
                    message: 'Error in get USER API',
                    error: error
                });
            } else {
                user.name = updatedUser.name;
                user.about = updatedUser.about;
                user.phoneNumber = updatedUser.phoneNumber;
                user.username = updatedUser.username;
                user.password = updatedUser.password;
                user.emailAddress = updatedUser.emailAddress;

                user.save(function (error1) {
                    if (error1) {
                        deferred.reject({
                            message: 'Error in get USER API',
                            error: error1
                        });
                    } else {
                        deferred.resolve({
                            message: 'Successfully Updated USER'
                        });
                    }
                });
            }
        });
        return deferred.promise;
    }

    function _delete(id) {
        var deferred = q.defer();

        User.remove({
            _id: id
        }, function(error, user) {
            if (error) {
                deferred.reject({
                    message: 'Error in get USER API',
                    error: error
                });
            } else {
                deferred.resolve({
                    message: 'Successfully Deleted USER'
                });
            }
        });
        return deferred.promise;
    }

};
