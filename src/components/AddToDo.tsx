import {
  ChangeEvent,
  ComponentProps,
  FormEvent,
  forwardRef,
  HTMLProps,
  useEffect,
  useRef,
  useState,
} from "react"
import { PlusIcon } from "@heroicons/react/16/solid"
import { Button, Spinner } from "@/components/ui"
import { useCreateTodoMutation } from "@/hooks"
import { useCurrentUser } from "@/store"
import { Todo } from "@/types"

export default function AddToDo() {
  const currentUser = useCurrentUser((state) => state.currentUser)
  const inputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState("")
  const {
    mutateAsync: createTodoMutation,
    isError,
    isPending,
  } = useCreateTodoMutation()

  if (isError) {
    throw new Error("An error occured while creating the todo.")
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todoTitle = title.trim()
    if (!todoTitle) return
    const currentDateTime: string = new Date().toISOString()
    const nextTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      createdBy: currentUser ?? "N/A",
      completed: false,
      createdAt: currentDateTime,
      lastUpdateddAt: currentDateTime,
    }
    await createTodoMutation(nextTodo)
    setTitle("")
  }

  useEffect(() => {
    const inputEl = inputRef.current
    if (!inputEl) return
    if (title === "") {
      inputEl.focus()
    }
  }, [title])

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <label htmlFor="todo">Add a new todo:</label>
        <Input
          ref={inputRef}
          type="text"
          name="todo"
          id="todo"
          disabled={isPending}
          value={title}
          onChange={handleInputChange}
        />
      </Field>
      <SubmitBtn disabled={isPending} />
    </Form>
  )
}

function Form({ children, ...restProps }: HTMLProps<HTMLFormElement>) {
  return (
    <form
      className="text-secondary-500 flex flex-wrap items-end gap-4"
      {...restProps}
    >
      {children}
    </form>
  )
}

function Field({ children, ...restProps }: HTMLProps<HTMLDivElement>) {
  return (
    <div className="flex flex-col gap-2" {...restProps}>
      {children}
    </div>
  )
}

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  function Input({ ...restProps }, ref) {
    return (
      <input
        ref={ref}
        className="border-secondary-100 focus-visible:outline-accent-500 disabled:bg-primary-400/20 rounded-lg border px-2 py-1.5"
        {...restProps}
      />
    )
  },
)

function SubmitBtn({ disabled, ...restProps }: ComponentProps<typeof Button>) {
  return (
    <Button
      type="submit"
      className="bg-accent-500 hover:bg-accent-600 disabled:bg-primary-400/20 disabled:text-secondary-500/50 flex min-w-24 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold text-slate-200 disabled:cursor-not-allowed"
      {...restProps}
    >
      {disabled ? (
        <Spinner />
      ) : (
        <>
          Add
          <PlusIcon className="w-4" />
        </>
      )}
    </Button>
  )
}
