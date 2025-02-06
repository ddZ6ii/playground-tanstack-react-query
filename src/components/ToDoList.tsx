import { ComponentProps, HTMLProps } from "react"
import { useTodosQuery, useUsersQuery } from "@/hooks"
import { Spinner } from "@/components/ui"

export default function ToDoList() {
  const {
    data: todos,
    isPending: pendingTodos,
    isError: hasErrorTodos,
  } = useTodosQuery("_sort=-createdAt") // fetch todos sorted by creation date in descending order (see json-server API)

  const {
    data: users,
    isPending: pendingUsers,
    isError: hasErrorUsers,
  } = useUsersQuery()

  if (hasErrorTodos) {
    throw new Error("An error occured while fecthing todos.")
  }
  if (hasErrorUsers) {
    throw new Error("An error occured while fecthing users.")
  }
  if (pendingTodos || pendingUsers) {
    return <SpinnerLarge />
  }

  const getUserById = (userId: string) => {
    return users.find((user) => user.id === userId)
  }

  // !TODO: add edit and delete icon...
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <Title>{todo.title}</Title>
          <Field>
            <label htmlFor={`completed-${todo.id}`}>Status:</label>{" "}
            <input
              disabled
              type="checkbox"
              id={`completed-${todo.id}`}
              defaultChecked={todo.completed}
            />
          </Field>
          <p>Assignee: {getUserById(todo.createdBy)?.name ?? "N/A"}</p>
        </ListItem>
      ))}
    </List>
  )
}

/**
 * Use CSS subgrid to perfectly align todo's content with each other.
 * To do so, we need to:
 *  1) First set the parent's todo list to display a responsive grid:
 *    - display: grid
 *    - grid-template-colums: repeat(auto-fit, minmax(min(180px,  100%), 1fr))
 *  2) Then set each todo element as a grid to layout its content:
 *     - display: grid
 *  3) Now to implement the subgrid feature, we need to configure the parent's rows template according to the todo's content (3 lines to be displayed, the first one being of variable size):
 *    - grid-template-rows: min-content, repeat(2, auto)
 *  4) Finally we need to set the todo's element to adhere to the parent's grid:
 *    - grid-template-rows: subgrid
 *    - grid-row: span 3
 */
function List({ children, ...restProps }: HTMLProps<HTMLUListElement>) {
  return (
    <ul
      className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] grid-rows-[min-content_repeat(2,auto)] gap-4"
      {...restProps}
    >
      {children}
    </ul>
  )
}

function ListItem({ children, ...restProps }: HTMLProps<HTMLLIElement>) {
  return (
    <li
      className="border-secondary-100 hover:shadow-accent-500/20 hover:border-accent-500 ease row-span-3 grid grid-rows-subgrid gap-2 rounded-md border px-4 py-2 transition-all duration-300 hover:shadow-lg"
      {...restProps}
    >
      {children}
    </li>
  )
}

function Title({ children, ...restProps }: HTMLProps<HTMLHeadingElement>) {
  return (
    <h3 className="font-semibold" {...restProps}>
      {children}
    </h3>
  )
}

function Field({ children, ...restProps }: HTMLProps<HTMLDivElement>) {
  return (
    <div className="flex items-center gap-2" {...restProps}>
      {children}
    </div>
  )
}

function SpinnerLarge({ ...restProps }: ComponentProps<typeof Spinner>) {
  return (
    <Spinner
      wrapperStyle="mx-auto h-full grid place-items-center"
      loaderStyle="w-20"
      {...restProps}
    />
  )
}
