export type Nullable<T> = T | null

export type Theme = "light" | "dark"

export type Todo = {
  id: string
  title: string
  completed: boolean
  createdAt: string
  lastUpdateddAt: string
  createdBy: string
}

export type User = {
  id: string
  name: string
}
