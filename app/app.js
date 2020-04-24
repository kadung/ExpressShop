const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const adminModel = require('./models/admin');

const sessionMw = require('./middlewares/session');
// const passportMw = require('./middlewares/passport');

let app = express();

// mongodb
var mongoAddress = 'mongodb://127.0.0.1/shop';
mongoose.connect(mongoAddress, { useNewUrlParser: true });

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
app.use(sessionMw.session(db));

app.use(passport.initialize());
app.use(passport.session());
/* PASSPORT LOCAL AUTHENTICATION */
passport.use(adminModel.createStrategy());

passport.serializeUser(adminModel.serializeUser());
passport.deserializeUser(adminModel.deserializeUser());

// express routes
app.use('/', require('./routes/index'));

// 404 error
app.use((req, res, next) => {
  res.render('common/page-not-found');
});

module.exports = app;
