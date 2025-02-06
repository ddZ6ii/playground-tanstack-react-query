import { create } from "zustand"

type State = {
  currentUser: string | null
}

type Action = {
  updateCurrentUser: (nextUserId: State["currentUser"]) => void
}

export const useCurrentUser = create<State & Action>((set) => ({
  currentUser: null,
  updateCurrentUser: (nextUserId) => {
    set(() => ({ currentUser: nextUserId }))
  },
}))
