exports.loginPage = (req, res, next) => {
    res.render('common/login')
}

exports.login = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.send({
            err: "Login failed"
        });
      }
  
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
  
        return res.redirect('/admin/home');
      });
  
    })(req, res, next);
}