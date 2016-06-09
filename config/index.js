(function() {
    'use strict';
    module.exports = function(app, db) {
        app.controllers = {};
        app.db = {};
        app.services = {};


        require('./db')(db);
        require('./logs')(app);
    }
})();
