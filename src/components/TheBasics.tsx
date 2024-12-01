import {
  ComponentProps,
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
} from "react"
import { twMerge } from "tailwind-merge"
import { Button, Section } from "@/components/ui"

export default function TheBasics() {
  return (
    <Section>
      <Heading2>@TomIsLoading</Heading2>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex
        expedita ipsum est quae ab officiis, similique ullam cupiditate
        doloremque odio. Dolorem ad consectetur debitis illo iusto quod minus
        labore.
      </Text>
      <ActionList className="divide-accent border-accent flex-wrap justify-between divide-x rounded-xl border">
        <ActionItem>
          <ActionButton className="bg-accent-600 hover:bg-accent-500 text-neutral-100">
            Subscribe
          </ActionButton>
        </ActionItem>
        <ActionItem>
          <ActionButton className="text-accent-500 hover:text-primary-500 hover:bg-secondary-500 active:bg-indigo-50">
            Notification
          </ActionButton>
        </ActionItem>
      </ActionList>
    </Section>
  )
}

function Heading2({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLHeadingElement>) {
  const baseStyle = "text-xl font-bold"
  return (
    <h2 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h2>
  )
}

function Text({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLParagraphElement>) {
  const baseStyle = "leading-relaxed"
  return (
    <p className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </p>
  )
}

function ActionList({
  children,
  className = "",
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const baseStyle =
    "divide-accent-500 border-accent-500 flex flex-wrap justify-between divide-x overflow-hidden rounded-xl border"
  return (
    <ul className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </ul>
  )
}

function ActionItem({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLLIElement>) {
  const baseStyle = "flex-1"
  return (
    <li className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </li>
  )
}

function ActionButton({
  children,
  className = "",
  ...restProps
}: ComponentProps<typeof Button>) {
  const baseStyle = "p-4 transition-all duration-800 ease w-full rounded-none"
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  )
}
