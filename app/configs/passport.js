const LocalStrategy  = require('passport-local').Strategy;

const AdminModel = require('../models/admin');
const CustomerModel = require('../models/customer');

module.exports = (passport) => {
    /* Passport session setup  */
    // Save data to session cookie in req.session.passport
    // user param receives from re.logIn
    passport.serializeUser((user, done) => {
        const userPrototype = Object.getPrototypeOf(user);
        let isAdmin = false;
        if(userPrototype === AdminModel.prototype) isAdmin = true;
        
        done(
            null,
            {
                id: user.id,
                isAdmin: isAdmin
            }
        );
    });

    // Get user detail from database with user id from session cookie to req.user
    // data param is saved object in req.session.passport (cookie session)
    passport.deserializeUser((data, done) => {
        if (data.isAdmin)
            return AdminModel.findById(data.id, function (err, user) {
                done(err, user);
            });
        
        CustomerModel.findById(data.id, function (err, user) {
            done(err, user);
        });
    });

    /* Authentication */    
    passport.use(
        "local-auth",
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            /* 
                Anything return in done method will transmit to passport.authenticate callback
                EX:  return done(a,b)  ==> passport.authenticate(strategy, (a,b) => {})
            */
            let model = CustomerModel;
            if(req.body.type) model = AdminModel;
            
            try {
                const user = await model.findOne({'email': email});
                // User is not found
                if (!user)
                    return done(false, false)
                // Password is incorrect
                if (!user.validPassword(password))
                    return done(false, false)
                // All is well
                done(false, user);
            } catch(err) {
                return done(false, false);
            };
        })
    );
}