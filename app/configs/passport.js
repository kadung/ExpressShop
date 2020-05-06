const LocalStrategy  = require('passport-local').Strategy;
const AdminModel = require('../models/admin');

module.exports = (passport) => {
    /* Passport session setup  */
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        AdminModel.findById(id, function (err, user) {
            done(err, user);
        });
    });

    /* Passport local */    
    passport.use(
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            AdminModel.findOne(
                {'email': email},
                (err, user) => {
                    /* 
                        Anything return in done method will transmit to passport.authenticate callback
                        EX:  return done(a,b)  ==> passport.authenticate(strategy, (a,b) => {})
                    */
                    // If any system error
                    if (err) 
                        return done(err, null);
                    // User is not found
                    if (!user)
                        return done(null, null)
                    // Password is incorrect
                    if (!user.validPassword(password))
                        return done(null, null)
                    // All is well
                    return done(null, user);
                }
            );
        })
    );
}