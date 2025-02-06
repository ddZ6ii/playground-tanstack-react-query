import { ChangeEvent, HTMLProps, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { twMerge } from "tailwind-merge"
import { useUsersQuery } from "@/hooks"
import { useCurrentUser } from "@/store"

export default function SelectUser() {
  const [opened, setOpened] = useState(false)
  const { currentUser, updateCurrentUser } = useCurrentUser()

  const { data: users, isPending, isError } = useUsersQuery()

  if (isError) {
    throw new Error("An error occured while fecthing users.")
  }

  const handleChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    updateCurrentUser(e.target.value)
  }

  return (
    <div className="relative">
      <Select
        value={currentUser ?? "none"}
        onChange={handleChangeUser}
        onClick={(_e) => {
          setOpened(!opened)
        }}
        onBlur={(_e) => {
          setOpened(false)
        }}
      >
        SelectUser
        <Option key="none" value="none" disabled hidden>
          -- Select a user --
        </Option>
        {isPending ? (
          <option disabled>Loading...</option>
        ) : (
          users.map((user) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))
        )}
      </Select>
      <DropdownIcon opened={opened} />
    </div>
  )
}

function Select({ children, ...restProps }: HTMLProps<HTMLSelectElement>) {
  return (
    <select
      className="text-secondary-500 border-secondary-500 bg-primary-500 min-w-44 cursor-pointer appearance-none rounded-md border border-solid px-4 py-1 text-ellipsis"
      {...restProps}
    >
      {children}
    </select>
  )
}

function Option({ children, ...restProps }: HTMLProps<HTMLOptionElement>) {
  return (
    <option className="cursor-pointer" {...restProps}>
      {children}
    </option>
  )
}

function DropdownIcon({ opened }: { opened: boolean }) {
  const baseStyle =
    "ease absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 peer-focus-within:"
  return (
    <div className={twMerge(baseStyle, opened ? "-rotate-180" : "")}>
      <ChevronDownIcon className="w-4" />
    </div>
  )
}
