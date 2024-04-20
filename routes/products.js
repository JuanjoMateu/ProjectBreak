const express = require('express');
const router = express.Router()
const Products = require('../models/Products');
const ProductController = require('../controllers/ProductController')

router.post('/create', ProductController.create)
router.get('/', ProductController.getAll)
router.get('/getAll', ProductController.getAllSSR)
router.get('/id/:_id', ProductController.getByID)
router.delete('/id/:_id', ProductController.deleteProduct)
router.put('/markAsCompleted/:_id', ProductController.updateCompleted)




module.exports = router