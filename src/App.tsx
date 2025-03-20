import { HTMLProps } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { FallbackRender, Header, MainContent } from "@/components"
import { TanStackProvider } from "@/providers"
import { ThemeContextProvider } from "@/store"
import "./App.css"

export default function App() {
  return (
    <ThemeContextProvider>
      <ErrorBoundary FallbackComponent={FallbackRender}>
        <TanStackProvider>
          <PageLayout>
            <Header />
            <MainContent />
          </PageLayout>
        </TanStackProvider>
      </ErrorBoundary>
    </ThemeContextProvider>
  )
}

function PageLayout({ children }: HTMLProps<HTMLDivElement>) {
  return <div className="grid min-h-dvh grid-rows-[auto_1fr]">{children}</div>
}
