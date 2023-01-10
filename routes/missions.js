var express = require('express');
var router = express.Router();
var fetch = require('cross-fetch');
/* GET user mission page. */
var title = 'Webapp mission test'
// :user is used to actually collect the part of the url that the user can put in, this is usually used for product and user indexes, just to name a few things.
router.get('/:user', function (req, res, next) {
  var info = req.params
  console.log(req.params)
      res.render('mission', {title: title, user: JSON.stringify(info.user)});
  });
  
  
  module.exports = router;