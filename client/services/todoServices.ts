import { ISubmitTodo, Todo } from "@/types/todo.types";
import axios from "axios";

export async function getTodos() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL is not defined in environment variables");
  }
  const { data } = await axios.get(`${API_URL}`);
  return data.data;
};

export async function updateTodos(id: string, updates: Partial<Todo>) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL is not defined in environment variables");
  }

  const { data } = await axios.patch(`${API_URL}/${id}`, updates);
  return data.data
};



export async function submitTodo(todo: ISubmitTodo) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL is not defined in environment variables");
  }
  const { data } = await axios.post(`${API_URL}`, todo)
  return data.data
}