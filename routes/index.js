var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET a new resource */
router.get('/newEndpoint', function(req, res, next) {
  res.send({ yourParam: req.query.someParam });
});

module.exports = router;
