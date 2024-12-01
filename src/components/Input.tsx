import { ChangeEvent, HTMLProps, useState } from "react"
import { Section } from "@/components/ui"
import { twMerge } from "tailwind-merge"

export default function Input() {
  const [email, setEmail] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
    <Section className="grid place-content-center">
      <Field>
        <FieldInput
          id="email"
          type="email"
          value={email}
          onChange={handleInputChange}
        />
        <FieldLabel htmlFor="email">Email</FieldLabel>
      </Field>
    </Section>
  )
}

function Field({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLDivElement>) {
  const baseStyle = "relative"
  return (
    <div className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </div>
  )
}

function FieldInput({
  className = "",
  ...restProps
}: HTMLProps<HTMLInputElement>) {
  const baseStyle =
    "peer outline-secondary focus-visible:outline-accent-500 rounded-md bg-transparent p-4 outline-2 "
  return <input className={twMerge(baseStyle, className)} {...restProps} />
}

function FieldLabel({
  children,
  className = "",
  ...restProps
}: HTMLProps<HTMLLabelElement>) {
  const baseStyle =
    "bg-primary-500 peer-focus:text-accent-500 absolute top-0 left-0 translate-x-2 translate-y-2/3 px-1 text-slate-400 transition-transform peer-focus-visible:-translate-y-1/2 peer-focus-visible:translate-x-1"
  return (
    <label className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </label>
  )
}
