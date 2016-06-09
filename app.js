////////////// Require Dependencies //////////
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var q = require("q");
//-------------------------------------------//

////////////// Initiate Application //////////
var app = express();
var router = express.Router();
//-------------------------------------------//

////////////// Set Environment //////////////
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';
//-------------------------------------------//

////////////// Configure Application //////////
app.use(logger('dev'));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(cookieParser());
app.use('/', express.static('web-portal'));
app.use('/api', router);
//-------------------------------------------//

////////////// Application Files ////////////
require('./config')(app, mongoose);
require('./app/models')(app, mongoose);
require('./app/services')(app, q);
require('./app/controllers')(app, q);
require('./app/routes')(app, router);
//-------------------------------------------//



////////////// Error Handling ////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {},
        title: 'error'
    });
});
//-------------------------------------------//


module.exports = app;