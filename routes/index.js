var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "ChatVote! - We've updated our Privacy Policy!", username: process.env.TWITCHUSER, oauth: process.env.OAUTH });
});

module.exports = router;
