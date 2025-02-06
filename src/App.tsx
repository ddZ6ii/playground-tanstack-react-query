import { HTMLProps } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FallbackRender, Header, MainContent } from "@/components"
import { ThemeContextProvider } from "@/store"
import "./App.css"

const queryClient = new QueryClient()

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackRender}>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <PageLayout>
            <Header />
            <MainContent />
          </PageLayout>
        </QueryClientProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  )
}

function PageLayout({ children }: HTMLProps<HTMLDivElement>) {
  return <div className="grid min-h-dvh grid-rows-[auto_1fr]">{children}</div>
}
