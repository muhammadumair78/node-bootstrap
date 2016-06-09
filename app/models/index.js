'use strict';

module.exports = function(app, db) {
    require('./User')(app, db);
};
