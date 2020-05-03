const LocalStrategy  = require('passport-local').Strategy;
const AdminModel = require('../models/admin');

module.exports = (passport) => {
    /* Passport session setup  */
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    /* Passport local */
    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) { 
            AdminModel.findOne(
                {'local.email': email},
                (err, user) => {
                    if (err)
                        return done(err);
                    // User is not found, return the message
                    if (!user)
                        return done(null, false, req.flash('loginMessage', 'No user found.'));
                    // User is found but the password is wrong
                    if (!user.validPassword(password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                    // All is well
                    return done(null, user);
                }
            );
        })
    );
}