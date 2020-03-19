var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// mongodb
var mongoAddress = 'mongodb://127.0.0.1/shop';
mongoose.connect(mongoAddress, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// express routes
app.use('/', require('./routes/storefront'));
app.use('/admin', require('./routes/admin'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('pages/page-not-found');
});

module.exports = app;
