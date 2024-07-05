const Tasks = require('../models/tasksModel');

const createTask = async (req, res) => {
  try {
    const { description, topic } = req.body;

    const topicAlreadyExists = await Tasks.findOne({ topic });
    if (topicAlreadyExists) {
      return res.status(400).json({ msg: 'Topic already exists' });
    }
    const task = await Tasks.create({ description, topic });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Tasks.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `task with id:${taskID} not found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const tasks = await Tasks.findOneAndDelete({ _id: taskID });
    res.status(200).json({ msg: 'task removed successfully' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
