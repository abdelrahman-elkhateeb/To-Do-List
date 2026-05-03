import { Todo } from "@/types/todo.types";
import axios from "axios";

export async function getTodos() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return data.data;
};

export async function updateTodos(id: string, updates: Partial<Todo>) {
  const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, updates);
  return data.data
};