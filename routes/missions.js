var express = require('express');
var router = express.Router();
var fetch = require('cross-fetch');
var fs = require('fs');

/* GET user mission page. */
var title = 'Webapp mission test'
// :user is used to actually collect the part of the url that the user can put in, this is usually used for product and user indexes, just to name a few things.
router.get('/:user', function (req, res, next) {
  console.log(fs.accessSync(__dirname + `/../data/users/${req.params.user}`, fs.constants.R_OK && fs.constants.W_OK));
  res.render('mission', { title: title, data: { user: req.params.user } });
});

async function getUserData(user) {
  try {
  } catch (err) {

  }
}

module.exports = router;