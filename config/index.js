(function() {
    'use strict';
    module.exports = function(app, db) {
        app.controllers = {};
        app.db = {};
        app.services = {};
        app.tokenSecret = "ThisIsASecretForToken";
        app.tokenExpreTime = 1440; // expires in 24 hours

        require('./db')(db);
        require('./logs')(app);
    }
})();
