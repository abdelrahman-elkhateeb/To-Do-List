import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "you need to type a title for the task :)"],
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true
  }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;