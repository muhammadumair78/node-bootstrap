'use strict';

module.exports = function(app, q) {
	require('./welcome')(app,q);
	require('./user')(app,q);
};
