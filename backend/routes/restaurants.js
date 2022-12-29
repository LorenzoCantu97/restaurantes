var express = require('express');
var router = express.Router();
const restaurants = require('../controllers/restaurants.controller');

router.get('/', restaurants.getAll);
router.post('/', restaurants.newRestaurant);
router.put('/', restaurants.updateRestaurant);
router.delete('/', restaurants.deleteRestaurant);

module.exports = router;