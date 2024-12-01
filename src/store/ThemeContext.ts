import { createContext } from "react"
import { Nullable, Theme } from "@/types"

type ThemeContextValue = {
  theme: Theme
  changeTheme: (newTheme: Theme) => void
}
export const ThemeContext = createContext<Nullable<ThemeContextValue>>(null)
