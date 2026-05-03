export type Priority = "Low" | "Medium" | "High";

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt?: string;
  updatedAt?: string;
}