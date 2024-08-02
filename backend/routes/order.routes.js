const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const authJwt = require('../middlewares/authJwt');

router.post('/create', [authJwt.verifyToken], orderController.createOrder);
router.get('/:id', [authJwt.verifyToken], orderController.getOrder);
router.put('/:id', [authJwt.verifyToken], orderController.updateOrder);
router.delete('/:id', [authJwt.verifyToken], orderController.deleteOrder);

module.exports = router;
