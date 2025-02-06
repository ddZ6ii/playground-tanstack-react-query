import { ComponentProps, HTMLProps } from "react"
import { GoSun } from "react-icons/go"
import { IoMoon } from "react-icons/io5"
import { twMerge } from "tailwind-merge"
import { SelectUser } from "@/components"
import { Button } from "@/components/ui"
import { useThemeContext } from "@/hooks"

export default function Header() {
  const { theme, changeTheme } = useThemeContext()
  const isDarkTheme = theme === "dark"
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    changeTheme(isDarkTheme ? "light" : "dark")
  }
  return (
    <StyledHeader>
      <SelectUser />
      <ToggleThemeBtn onClick={handleClick}></ToggleThemeBtn>
    </StyledHeader>
  )
}

function StyledHeader({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLHeadElement>) {
  const baseStyle = "sticky top-0 px-8 py-4 flex items-center justify-between"
  return (
    <header className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </header>
  )
}

function ToggleThemeBtn({
  className = "",
  ...restProps
}: ComponentProps<typeof Button>) {
  const { theme } = useThemeContext()
  const isDarkTheme = theme === "dark"
  const baseStyle =
    "text-secondary-500 outline-secondary hover:bg-secondary-500 hover:text-primary-500 focus-visible:bg-secondary-500 focus-visible:text-primary-500 rounded-full p-2 text-xl outline-2 transition-colors ml-auto"
  return (
    <Button
      title={`Toggle ${isDarkTheme ? "light" : "dark"} mode`}
      className={twMerge(baseStyle, className)}
      {...restProps}
    >
      {isDarkTheme ? (
        <GoSun aria-label="Toggle light mode" />
      ) : (
        <IoMoon aria-label="Toggle dark mode" />
      )}
    </Button>
  )
}
