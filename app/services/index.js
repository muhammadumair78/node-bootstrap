'use strict';

module.exports = function(app, q, jwt) {
    require('./auth')(app, q, jwt);
    require('./user')(app, q);
};
