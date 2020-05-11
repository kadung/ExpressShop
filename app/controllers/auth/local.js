const passport = require('passport');

const Category = require('../../models/category');
const CustomerModel = require('../../models/customer');

exports.loginPage = (req, res, next) => {
    res.render(
      'common/login',
      { isAdmin: req.originalUrl.includes("admin") }
    )
}

exports.login = (req, res, next) => {
    passport.authenticate(
      // Use strategy which define in passport config
      "local-auth",
      // Data return from done method in passport config
      (err, user) => {
        if (err) return next(err);
        if (!user) return res.send({ success: false });
        
        // req.logIn will trigger passport.serializeUser automatically with user object
        req.logIn(user, (err) => {
          if (err) return next(err);
          return res.send({ success: true });
        });
      }
    )(req,res,next);
}

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/');
};

exports.registerPage = (req, res, next) => {
  Category.find()
    .then(categories => {
      res.render(
        'storefront/pages/register',
        {
          categories: categories,
          cartNum: req.session.cart && req.session.cart.length || 0,
          isLogin: req.session.passport && req.session.passport.user
        }
      )
    })
};

exports.register = async (req, res, next) => {
    // Check if account existed
    Promise.all([
        Category.find(),
        CustomerModel.findOne({'email': req.body.email})
    ])
    .then(([categories, user]) => {
        let errors = [];
        // Check if account existed
        if (user) errors.push("Email is registered");

        // Check if password and confirm are same
        if(req.body.password != req.body.password_confirm) errors.push("Password are not match");

        // Return error if any
        if (errors.length)
            return res.render(
                'storefront/pages/register',
                {
                categories: categories,
                cartNum: req.session.cart && req.session.cart.length || 0,
                isLogin: req.session.passport && req.session.passport.user,
                errors: errors
                }
            );

        // All is well, create new account
        const newCustomerData = {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            addresses: []
        };
        CustomerModel(newCustomerData).save()
            .then(newCustomer => {
                req.logIn(newCustomer, (err) => {
                    if (err) return next(err);
                    res.redirect('/profile');
                    });
            });
    })
};