import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitTodo as submitTodoApi } from "./todoServices";
import { ISubmitTodo } from "@/types/todo.types";

export function useSubmitTodo() {
  const queryClient = useQueryClient();

  const { mutate: submitTodoMutate, isPending, error } = useMutation({
    mutationFn: (todo: ISubmitTodo) => submitTodoApi(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  })
  return { submitTodoMutate, isPending, error }
}