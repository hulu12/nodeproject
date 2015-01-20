var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/post', function (req, res) {
  res.render('post', { title: '发表' });
});
router.post('/post', function (req, res) {
});

module.exports = router;
