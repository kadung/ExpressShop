const LocalStrategy  = require('passport-local').Strategy;

const AdminModel = require('../models/admin');
const CustomerModel = require('../models/customer')

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
        (req, email, password, done) => {
            let model = CustomerModel;
            if(req.body.type) model = AdminModel;

            model.findOne(
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
                        return done(null, false)
                    // Password is incorrect
                    if (!user.validPassword(password))
                        return done(null, false)
                    // All is well
                    return done(null, user);
                }
            );
        })
    );

    /* Customer registration */
    passport.use(
        'signup',
        new LocalStrategy(
            {
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback: true
            },
            (req, email, password, done) => {
                CustomerModel.findOne({'email': email})
                .then(user => {
                    if (user) return done("This email is used", false);
                        
                    const newCustomer = {
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        email: email,
                        password: password,
                        addresses: []
                    }
                    CustomerModel(newCustomer).save()
                    .then(user => {
                        return done(null, user);
                    })
                })
                .catch(next);
            }
        )
    );

}