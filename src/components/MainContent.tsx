import { HTMLAttributes, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import { AddToDo, ToDoList } from "@/components"

export default function MainContent() {
  return (
    <main className="grid grid-rows-[auto_1fr]">
      <Heading1>React Query</Heading1>
      <Section>
        <Heading2>List of todos</Heading2>
        <AddToDo />
        <ToDoList />
      </Section>
    </main>
  )
}

function Heading1({
  children,
  className = "",
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  const baseStyle = "text-center text-4xl my-4 font-bold"
  return (
    <h1 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h1>
  )
}

function Heading2({
  children,
  className = "",
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  const baseStyle = "text-2xl font-semibold"
  return (
    <h2 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h2>
  )
}

function Section({ children }: PropsWithChildren) {
  return (
    <section className="mt-4 grid grid-rows-[repeat(2,auto)_1fr] gap-8 px-8">
      {children}
    </section>
  )
}
