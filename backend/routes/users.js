var express = require('express');
var router = express.Router();
const users = require('../controllers/users.controller');

router.post('/', users.signUp);
router.get('/', users.login);

module.exports = router;
