const express = require('express');
const taskController = require('../controllers/taskController');
const {addTask} = require('../validators/task.validator');


const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await taskController.getRecentTasks();

  res.json(tasks);
});

router.post('/', addTask, async (req, res) => {
  const { title, description } = req.body;
  const id = await taskController.createTask({ title, description });
  res.status(201).json({ id });
});

router.put('/:id/done', async (req, res) => {
  await taskController.markTaskDone(req.params.id);
  res.status(200).json({ message: 'Task marked as completed' });
});

module.exports = router;