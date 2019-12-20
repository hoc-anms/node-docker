var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Docker NodeJS', name: 'Van Hoc Pham' });
});

module.exports = router;
