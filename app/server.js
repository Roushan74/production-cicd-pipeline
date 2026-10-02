const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Learn Git",
    completed: true
  },
  {
    id: 2,
    title: "Build CI/CD pipeline",
    completed: false
  }
];

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "production-cicd-api"
  });
});

app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.status(200).json(task);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks = tasks.filter((task) => task.id !== id);

  res.status(204).send();
});

module.exports = app;
