const passport = require('passport');

exports.loginPage = (req, res, next) => {
    res.render(
      'common/login',
      { isAdmin: true }
    )
}

exports.login = (req, res, next) => {
    passport.authenticate(
      'local',
      (err, user) => {
        if (err) return next(err);
        if (!user) 
          return res.send({ success: false });
        req.logIn(user, function(err) {
          if (err) return next(err);
          return res.send({ success: true });
        });
      }
    )(req,res,next);
}