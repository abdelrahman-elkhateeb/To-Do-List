"use client"

import { useTodo } from "@/services/useTodo";
import { Todo } from "@/types/todo.types";
import TodoRow from "./TodoRow";

export default function TodoItem() {
  const { todos, isPending, error } = useTodo();

  if (isPending) return <p className="text-center p-4 text-slate-500">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">Error loading tasks</p>;

  return (
    <div className="divide-y border rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
      {todos?.map((todo: Todo) => (
        <TodoRow key={todo._id} todo={todo} />
      ))}

      {todos?.length === 0 && (
        <p className="p-8 text-center text-slate-400 text-sm">No tasks yet.</p>
      )}
    </div>
  );
}
