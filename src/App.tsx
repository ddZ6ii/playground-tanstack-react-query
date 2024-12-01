import { Header, Main } from "@/components"
import { ThemeContextProvider } from "@/store"
import "./App.css"

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Main />
    </ThemeContextProvider>
  )
}

export default App
