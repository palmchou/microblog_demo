/**
 * Created by Palm on 14-4-26.
 */
var express = require('express');
var router = express.Router();

var doGet  = function(req,res){
    res.send('login');
}

var doPost = function(req,res){

}

router.get('/',doGet);
router.post('/',doPost);

module.exports = router;