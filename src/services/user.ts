import { api } from "@/services/api"
import { User } from "@/types"
import { delay } from "@/utils"

export async function getUsers(delayInMs?: number): Promise<User[]> {
  const res = await api.get<User[]>("/users")
  // Delay returning fetch results.
  if (delayInMs) {
    await delay(delayInMs)
  }
  return res.data
}
