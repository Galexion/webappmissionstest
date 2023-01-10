var express = require('express');
var router = express.Router();
var fetch = require('cross-fetch')
/* GET home page. */
var title = 'Webapp Mission Test'
router.get('/', function (req, res, next) {
    res.render('index', {title: title});
  });
  
  
  module.exports = router;