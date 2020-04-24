const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

exports.session = (db) => {
  return session({
    secret: 'handsome',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000   // 1 week in milisecond
    },
    store: new MongoStore({ 
      mongooseConnection: db,
      autoRemove: 'interval',
      autoRemoveInterval: 7 * 24 * 60   // 1 week in minutes
    })
  })
}