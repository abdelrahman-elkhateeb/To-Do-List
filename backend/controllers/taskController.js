import Todo from "../models/todo.models.js";

export async function createTodo(req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({ success: true, data: newTodo })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getTodos(req, res) {
  try {
    const todo = await Todo.find({});
    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ success: false, message: "the tasks not found" });
    }

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ success: false, message: "this task couldn't deleted" });
    }

    res.status(200).json({ success: true, message: "task deleted successfully" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}