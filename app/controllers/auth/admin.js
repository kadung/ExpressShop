const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');

exports.loginPage = (req, res, next) => {
    res.render('common/login', {isAdmin: true})
}

exports.login = (req, res, next) => {
    passport.authenticate(
      'local-login',
      {
        successRedirect : '/admin/home',
        failureRedirect : '/login',
        failureFlash : true
      }
    )
}