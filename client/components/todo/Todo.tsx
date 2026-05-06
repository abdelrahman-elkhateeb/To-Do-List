"use client"
import { useTodo } from "@/services/useTodo";
import { TodoItem } from "@/components/todo/TodoItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function TodoPage() {
  const { todos, isPending, error } = useTodo();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">

        {/* Header Section */}
        <div className="mb-8 space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900 dark:text-slate-100">
            Tasks
          </h1>
          <p className="text-muted-foreground">
            Manage your daily goals with style.
          </p>
        </div>

        {/* Add Task Section (Shadcn Input + Select + Button) */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border">
          <Input
            placeholder="What needs to be done?"
            className="flex-1 bg-transparent border-none focus-visible:ring-0 text-lg"
          />
          <div className="flex gap-2">
            <Select defaultValue="Medium">
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" className="shrink-0">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Status Messages */}
        {isPending && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-center">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Tasks List */}
        <div className="grid gap-3">
          {!isPending && todos?.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed rounded-2xl">
              <p className="text-muted-foreground">No tasks for today. Relax!</p>
            </div>
          )}

          {todos?.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              // هنا هتربط الـ functions من الـ hooks بتاعتك
              onDelete={(id) => console.log("Delete", id)}
              onToggle={(id, status) => console.log("Toggle", id, status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}