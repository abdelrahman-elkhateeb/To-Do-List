import axios from "axios";

export async function getTodos() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return data.data;
};

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
};

export async function updateTodos(updates: Partial<Todo>, id: string) {
  const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, updates);
  return data.data
};