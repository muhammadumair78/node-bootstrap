'use strict';

module.exports = function(app, q, jwt) {
	require('./auth')(app, q, jwt);
	require('./welcome')(app, q);
	require('./user')(app, q);
};
