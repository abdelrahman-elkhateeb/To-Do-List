import express from "express";
import Todo from "../models/todo.models.js";

const router = express.Router();

//get all todos
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({ success: true, data: newTodo })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router