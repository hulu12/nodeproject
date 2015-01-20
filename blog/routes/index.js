var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { 
  	title: '这是我的BLOG主页',
  	user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()

   });
});

module.exports = router;
