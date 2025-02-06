import { api } from "@/services"
import { Todo } from "@/types"
import { delay } from "@/utils"

export async function getTodos(order = "", delayInMs = 1000): Promise<Todo[]> {
  let url = "/todos"
  if (order) {
    url += `?${order}`
  }
  const res = await api.get<Todo[]>(url)
  // Delay returning fetch results.
  await delay(delayInMs)
  return res.data
}

export async function createTodo(
  nextTodo: Todo,
  delayInMs = 1000,
): Promise<Todo> {
  const res = await api.post<Todo>("/todos", nextTodo)
  // Delay returning fetch results.
  await delay(delayInMs)
  return res.data
}
