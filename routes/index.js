var express = require('express');
var router = express.Router();


var doGet = function(req,res){
    res.render('index',{title:'Express'});
}



/* GET home page. */
router.get('/', doGet);

module.exports = router;
