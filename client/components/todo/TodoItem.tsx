"use client"

import { useTodo } from "@/services/useTodo"
import { Todo } from "@/types/todo.types";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";

export default function TodoItem() {
  const { todos, isPending, error } = useTodo();

  if (isPending) return <p className="text-center p-4 text-slate-500">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">Error loading tasks</p>;

  return (
    <div className="divide-y border rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
      {todos?.map((todo: Todo) => (
        <div key={todo._id} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <Checkbox checked={todo.completed} />
            <span className={`text-sm ${todo.completed ? "line-through text-slate-400" : ""}`}>
              {todo.title}
            </span>
          </div>

          <Badge variant="secondary" className="text-[10px] font-medium uppercase tracking-wider">
            {todo.priority}
          </Badge>
        </div>
      ))}

      {todos?.length === 0 && (
        <p className="p-8 text-center text-slate-400 text-sm">No tasks yet.</p>
      )}
    </div>
  );
}
