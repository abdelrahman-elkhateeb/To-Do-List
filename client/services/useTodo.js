import { getTodos } from "../services/todoServices";
import { useQuery } from "@tanstack/react-query";

export function useTodo() {
  const { isPending, data: todos = [], error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos
  })

  return { isPending, error, todos }
}