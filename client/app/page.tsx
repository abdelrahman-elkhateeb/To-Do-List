"use client"
import { useTodo } from "../services/useTodo"

export default function Page() {
  const { todos } = useTodo();
  console.log(todos);

  return (
    <div>

    </div>
  )
}
