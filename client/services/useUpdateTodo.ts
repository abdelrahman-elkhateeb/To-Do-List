import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodos } from "./todoServices";
import { Todo } from "@/types/todo.types";

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const { mutate: updateTodo, isPending, error } = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Todo> }) =>
      updateTodos(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })
  return { updateTodo, isPending, error };
}