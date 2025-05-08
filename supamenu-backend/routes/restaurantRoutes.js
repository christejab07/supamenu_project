const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController.js');
const {authenticateToken} = require('../middleware/authMiddleware.js');

router.post('/create', authenticateToken, restaurantController.createRestaurant);
router.get('/:id', authenticateToken, restaurantController.getRestaurant);

module.exports = router;