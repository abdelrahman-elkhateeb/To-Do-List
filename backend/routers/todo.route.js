import express from "express";
import Todo from "../models/todo.models.js";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/taskController.js";

const router = express.Router();

//get all todos and create todo
router.route("/").get(getTodos).post(createTodo);

// update and delete todos
router.route("/:id").patch(updateTodo).delete(deleteTodoF)


export default router;