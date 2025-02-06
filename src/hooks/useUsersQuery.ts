import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/services"

export default function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(1000),
  })
}
