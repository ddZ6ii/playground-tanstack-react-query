import { HTMLAttributes, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import { Badge, Follow, Input, TheBasics } from "@/components"

export default function Main() {
  return (
    <main>
      <Heading1>React + TailwindCSS</Heading1>
      <TheBasics />
      <Follow />
      <Badge />
      <Input />
    </main>
  )
}

function Heading1({
  children,
  className = "",
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  const baseStyle = "text-center text-2xl font-bold"
  return (
    <h1 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h1>
  )
}
