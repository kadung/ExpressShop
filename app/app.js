const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const sessionConfig = require('./configs/session');
const databaseConfig = require('./configs/database');
const passportConfig = require('./configs/passport');

let app = express();

// Mongodb setup
mongoose.connect(databaseConfig.url, { useNewUrlParser: true });

// Passport setup
passportConfig(passport);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(sessionConfig.init(db));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// express routes
app.use('/', require('./routes/index'));

// 404 error
app.use((req, res, next) => {
  res.render('common/page-not-found');
});

module.exports = app;
