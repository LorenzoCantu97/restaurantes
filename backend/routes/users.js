var express = require('express');
var router = express.Router();
var users = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', users.signUp);

module.exports = router;
