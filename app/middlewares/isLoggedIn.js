const _ = require('lodash');

exports.admin = (req, res, next) => {
    if (req.session.passport && req.session.passport.user.isAdmin)
        return next();
    
    res.redirect('/');
}

exports.customer = (req, res, next) => {
    if (req.session.passport && !req.session.passport.user.isAdmin)
        return next();
    
    res.redirect('/');
}