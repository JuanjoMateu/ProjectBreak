const express = require('express');
const router = express.Router()
const Products = require('../models/Products');
const ProductController = require('../controllers/ProductController')

router.post('/create', ProductController.createProduct)
router.get('/', ProductController.getAllProducts)
router.get('/getAll', ProductController.getAllProductsSSR)
router.get('/id/:_id', ProductController.getProductByID)
router.delete('/id/:_id', ProductController.deleteProduct)
router.put('/id/:_id', ProductController.updateProductName)
router.put('/markAsCompleted/:_id', ProductController.updateCompleted)

module.exports = router