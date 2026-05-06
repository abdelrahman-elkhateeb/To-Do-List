"use client"

import { Todo } from "@/types/todo.types"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2, Calendar } from "lucide-react"
import { format } from "date-fns"

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

export function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"; // أحمر
      case "Medium":
        return "secondary"; // رمادي/برتقالي
      case "Low":
        return "outline"; // أخضر/أزرق
      default:
        return "default";
    }
  }

  return (
    <Card className={`overflow-hidden transition-all duration-200 hover:shadow-md ${todo.completed ? 'opacity-70 bg-slate-50/50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-900'}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-4 flex-1">
        
            <Checkbox
              id={`todo-${todo._id}`}
              checked={todo.completed}
              onCheckedChange={(checked) => onToggle(todo._id, !!checked)}
              className="h-5 w-5 border-2"
            />

            <div className="flex flex-col gap-1">
              <label
                htmlFor={`todo-${todo._id}`}
                className={`text-sm md:text-base font-medium leading-none cursor-pointer select-none transition-all ${todo.completed ? "line-through text-muted-foreground" : "text-slate-900 dark:text-slate-100"
                  }`}
              >
                {todo.title}
              </label>

              <div className="flex items-center gap-2">
                {/* الـ Priority Badge */}
                <Badge variant={getPriorityVariant(todo.priority) as any} className="text-[10px] px-2 py-0">
                  {todo.priority}
                </Badge>

                {todo.createdAt && (
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(todo.createdAt), "MMM d, h:mm a")}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* زرار المسح */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(todo._id)}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>
      </CardContent>
    </Card>
  )
}