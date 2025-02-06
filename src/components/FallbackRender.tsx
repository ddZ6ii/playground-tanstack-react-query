import { HTMLProps } from "react"
import { FallbackProps } from "react-error-boundary"
import { Button } from "@/components/ui"

export default function FallbackRender({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const errorMessage =
    error instanceof Error ? error.message : JSON.stringify(error)
  return (
    <Alert>
      <Wrapper>
        <Heading1>⚠️ Oops... something went wrong!</Heading1>
        <Text>{errorMessage}</Text>
        <Button
          className="bg-accent-500 mx-auto mt-8"
          onClick={resetErrorBoundary} // reset and re-render the whole tree inside the ErrorBoudary component
        >
          Try again
        </Button>
      </Wrapper>
    </Alert>
  )
}

function Alert({ children, ...restProps }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      role="alert"
      className="grid min-h-screen place-content-center"
      {...restProps}
    >
      {children}
    </div>
  )
}

function Wrapper({ children, ...restProps }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className="shadow-accent-500 grid gap-2 rounded-2xl p-4 shadow-lg"
      {...restProps}
    >
      {children}
    </div>
  )
}

function Heading1({ children, ...restProps }: HTMLProps<HTMLHeadingElement>) {
  return (
    <h1 className="text-secondary-500 text-2xl font-bold" {...restProps}>
      {children}
    </h1>
  )
}

function Text({ children, ...restProps }: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className="text-secondary-500" {...restProps}>
      {children}
    </p>
  )
}
