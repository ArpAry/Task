const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('./controller/tasksController');

router.post('/add', createTask);
router.get('/', getAllTasks);
router.get('/:id', getSingleTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
