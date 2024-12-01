import { ComponentProps, HTMLProps } from "react"
import { FaArrowRight } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { twMerge } from "tailwind-merge"
import { Section, Button } from "@/components/ui"

export default function Follow() {
  return (
    <Section className="flex flex-wrap items-center justify-between gap-4">
      <UserProfile>
        <Avatar />
        <Text>@tomisloading</Text>
      </UserProfile>
      <FollowButton>
        Follow{" "}
        <span className="mt-1 text-neutral-100 transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0">
          <FaArrowRight
            focusable={false}
            aria-hidden={true}
            className="text-inherit"
          />
        </span>
      </FollowButton>
    </Section>
  )
}

function UserProfile({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLDivElement>) {
  const baseStyle = "flex flex-wrap items-center gap-2"
  return (
    <div className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </div>
  )
}

function Avatar() {
  return (
    <div className="bg-secondary-500 w-fit rounded-full p-4">
      {
        <FiUser
          focusable={false}
          aria-hidden={true}
          className="text-primary-500 text-2xl"
        />
      }
    </div>
  )
}

function Text({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLParagraphElement>) {
  const baseStyle =
    "invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100"
  return (
    <p className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </p>
  )
}

function FollowButton({
  children,
  className = "",
  ...restProps
}: ComponentProps<typeof Button>) {
  const baseStyle =
    "group/follow bg-accent-600 hover:bg-accent-500 transition-all active:translate-y-1"
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  )
}
