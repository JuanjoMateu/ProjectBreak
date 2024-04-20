const express = require('express');
const router = express.Router()
const Task = require('../models/Task');
const TaskController = require('../controllers/TaskController')

router.post('/create', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/getAll', TaskController.getAllSSR)
router.get('/id/:_id', TaskController.getByID)
router.delete('/id/:_id', TaskController.deleteTask)
router.put('/markAsCompleted/:_id', TaskController.updateCompleted)




module.exports = router