import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find().limit(10).skip(0);
  const compareScores = (a, b) => b.score - a.score;

  tasks.sort(compareScores);

  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { name, score, user } = req.body;

  const newTask = new Task({
    name,
    score,
    user,
  });

  const savedTask = await newTask.save();

  res.json(savedTask);
};

export const getUserTasks = async (req, res) => {
  const { username } = req.body;

  const tasks = await Task.find({ name: username }).limit(10).skip(0);
  const sortDates = (a, b) => b.date - a.date;

  tasks.sort(sortDates);

  res.json({
    msg: "Lista de scores",
    tasks,
  });
};
