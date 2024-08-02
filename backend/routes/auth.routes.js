const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Define the routes and their corresponding controller functions
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
