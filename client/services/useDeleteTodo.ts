import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "./todoServices";

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deleteTodoMutate, isPending, error } = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  })

  return { deleteTodoMutate, isPending, error };
}