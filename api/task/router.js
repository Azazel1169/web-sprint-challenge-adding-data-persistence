// build your `/api/tasks` router here
const router = require("express").Router();
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const task = await Task.getTasks();
    res.json(task);
  } catch (error) {
    next(error);
  }
});

// Middleware for validation
function validateTaskPayload(req, res, next) {
  const { task_description } = req.body;

  if (typeof task_description !== "string" || task_description.trim() === "") {
    return res
      .status(400)
      .json({ message: "please provide a description to your task" });
  }
  next();
}

router.post("/", validateTaskPayload, async (req, res, next) => {
  try {
    const newTask = await Task.addTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;