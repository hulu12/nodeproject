var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/login', function (req, res) {
  res.render('login', { title: '登录' });
});
router.post('/login', function (req, res) {
});

module.exports = router;
