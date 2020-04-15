const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

let app = express();

// mongodb
var mongoAddress = 'mongodb://127.0.0.1/shop';
mongoose.connect(mongoAddress, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
app.use(session({
  secret: 'handsome',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db })
}));

// express routes
app.use('/', require('./app/routes/index'));

// catch all error
app.use((err, req, res, next) => {
  // Forward to error handler depend on error type
  console.log(err);
  // 404 error
  res.render('common/page-not-found');
});

module.exports = app;
