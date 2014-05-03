/**
 * Created by Palm on 14-4-26.
 */
var express = require('express');
var check = require('./isLogin');
var router = express.Router();

var doGet = function(req,res){
    req.session.user = null;
    req.flash('success', 'Logout success');
    res.redirect('/');
};

router.get('/', check.clin);
router.get('/', doGet);

module.exports = router;