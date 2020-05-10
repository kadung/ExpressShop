const passport = require('passport');

const Category = require('../../models/category');

exports.loginPage = (req, res, next) => {
    res.render(
      'common/login',
      { isAdmin: req.originalUrl.includes("admin") }
    )
}

exports.login = (req, res, next) => {
    passport.authenticate(
      "local-auth",                // Use passport strategy admin-auth 
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

exports.register = (req, res, next) => {
    console.log(req.body);
};