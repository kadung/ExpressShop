var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();


// mongodb
// var mongoAddress = 'mongodb://127.0.0.1/shop';
// mongoose.connect(mongoAddress, { useNewUrlParser: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// express routes
app.use('/', require('./app/routes/storefront'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('common/page-not-found');
});

module.exports = app;
