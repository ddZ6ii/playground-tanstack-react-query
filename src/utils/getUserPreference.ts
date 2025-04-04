import { Theme } from "@/types"

export default function getUserPreference(): Theme {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  return isDarkMode ? "dark" : "light"
}
