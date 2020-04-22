var mongoose = require('mongoose');

exports.login = (req, res, next) => {
    res.render('common/login')
}