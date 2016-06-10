'use strict';

module.exports = function(app, router) {

	//////*Route*////////////////////// Auth
	router.route('/login')
		.post(app.controllers.auth.login);
	router.route('/register')
		.post(app.controllers.auth.register);

	////// Check if user provided token or not
	////// Following routes will be disabled if user didnt provided token.
	router.use(app.controllers.auth.checkToken);

	//////*Route*////////////////////// Welcome
	router.route('/welcome')
		.get(app.controllers.welcome.welcome);

	//////*Route*////////////////////// User Routes
	router.route('/users')
		.post(app.controllers.users.create)
		.get(app.controllers.users.all);
	router.route('/users/:id')
		.get(app.controllers.users.get)
		.put(app.controllers.users.edit)
		.delete(app.controllers.users.delete);
};
