import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find().limit(10).skip(0)
  const compareScores = (a, b) => b.score - a.score;

  tasks.sort(compareScores);

  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { name, score, user } = req.body;

  const newTask = new Task({
    name,
    score,
    user

  });

  const savedTask = await newTask.save();

  res.json(savedTask);
};

// export const getTask = async (_, res) => {
//   const task = await Task.find().limit(10).skip(0)
//   console.log('lista de back',task)
//   if (!task) return res.status(404).json({ message: "There are no tasks" });
//   res.json(task);
// };

// export const deleteTask = async (req, res) => {
//   const task = await Task.findByIdAndDelete(req.params.id);

//   if (!task) return res.status(404).json({ message: "Task not found" });
//   res.json({message: 'Task deleted'});
// };

// export const updateTask = async (req, res) => {
//   const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   if (!task) return res.status(404).json({ message: "Task not found" });
//   res.json(task);
// };
