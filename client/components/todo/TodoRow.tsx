"use client"

import { useUpdateTodo } from "@/services/useUpdateTodo";
import { Priority, Todo } from "@/types/todo.types";
import { Check, Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useDeleteTodo } from "@/services/useDeleteTodo";

export default function TodoRow({ todo }: { todo: Todo }) {
  const { updateTodo, isPending: isUpdating } = useUpdateTodo();
  const { deleteTodoMutate, isPending: isDeleting } = useDeleteTodo();

  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: { title: todo.title, priority: todo.priority }
  })

  const onSubmit = (data: { title: string, priority: Priority }) => {
    updateTodo({
      id: todo._id,
      updates: data
    }, {
      onSuccess: () => setIsEditing(false)
    })
  }

  const handleDelete = () => {
    deleteTodoMutate(todo._id)
  }
  return (
    <div className="flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50">
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 items-center gap-2">
          <div className="flex gap-2 w-full">
            <Input {...register("title", { required: true })} autoFocus />
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              )} />
          </div>
          <Button type="submit" disabled={isUpdating}>
            <Check size={20} className="text-green-500" />
          </Button>
        </form>
      ) : (
        <div className="flex flex-1 items-center gap-3">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => updateTodo({ id: todo._id, updates: { completed: !todo.completed } })}
          />
          <span className={`text-sm ${todo.completed ? "line-through text-slate-400" : ""}`}>
            {todo.title}
          </span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Pen
          size={16}
          className="cursor-pointer text-slate-400"
          onClick={() => {
            if (isEditing) reset();
            setIsEditing(!isEditing);
          }}
        />
        <Badge variant="secondary" className="text-[10px] uppercase">
          {todo.priority}
        </Badge>
        <span className="hover:text-red-500">
          <Button onClick={handleDelete} variant="ghost" size="icon" disabled={isDeleting}>
            <Trash2 size={16} strokeWidth={0.5} />
          </Button>
        </span>
      </div>
    </div>
  )
}
