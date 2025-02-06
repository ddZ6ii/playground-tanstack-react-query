import { useQuery } from "@tanstack/react-query"
import { getTodos } from "@/services"

export default function useTodosQuery(sortingOrder?: string) {
  return useQuery({
    queryKey: ["todos"], // key to cache the fetched data
    queryFn: () => getTodos(sortingOrder), // function to fetch the data with sorting order (see json-server API)
  })
}
