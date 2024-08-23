import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .sort({ score: -1 })  // Ordena por score en orden descendente
      .limit(10);            // Limita a los 10 primeros resultados

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks", error });
  }
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
