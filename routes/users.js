var express = require('express');
var router = express.Router();


var doGet = function(req,res){
    res.send('hi');
}


/* GET users listing. */
router.get('/:user',doGet);

module.exports = router;
