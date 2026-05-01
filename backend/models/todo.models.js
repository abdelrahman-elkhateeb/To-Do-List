import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "you need to type a title for the task :)"],
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;