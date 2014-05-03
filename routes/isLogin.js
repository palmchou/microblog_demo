/**
 * Created by palm on 14-5-3.
 */

function checkLogin(req, res, next) {
    if(!req.session.user) {
        req.flash('error', 'Not login');
        return res.redirect('/login');
    }
    next();
}

function checkNotLogin(req, res, next) {
    if (req.session.user) {
        req.flash('error', 'Already login');
        return res.redirect('/');
    }
    next();
}

exports.clin = checkLogin;
exports.cnlin = checkNotLogin;