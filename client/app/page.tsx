"use client"
import { useTodo } from "../services/useTodo"

export default function Page() {
  const { todos, isPending: isTodoLoading, error } = useTodo();

  return (
    <div>

    </div>
  )
}
