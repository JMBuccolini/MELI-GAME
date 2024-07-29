import { Router } from "express";

import { getTasks, createTask } from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
// router.get("/tasks:id", authRequired, getTask);
router.post("/tasks", createTask);
// router.delete("/tasks:id", authRequired, deleteTask);
// router.put("/tasks:id", authRequired, updateTask);

export default router;
