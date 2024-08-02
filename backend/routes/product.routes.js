const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authJwt = require('../middlewares/authJwt');

router.post('/create', [authJwt.verifyToken], productController.createProduct);
router.get('/:id', [authJwt.verifyToken], productController.getProduct);
router.put('/:id', [authJwt.verifyToken], productController.updateProduct);
router.delete('/:id', [authJwt.verifyToken], productController.deleteProduct);

module.exports = router;
