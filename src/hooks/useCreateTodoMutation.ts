import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTodo } from "@/services"
import { Todo } from "@/types"

export default function useCreateTodoMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTodo,

    /**
     * Perform optimistic uptade.
     */
    // Before the mutation happens:
    onMutate: async (newTodo) => {
      // 1. Cancel any outgoing refetches (so they don't overwrite our optimistic update).
      await queryClient.cancelQueries({ queryKey: ["todos"] })
      // 2. Snapshot the previous cached value.
      const previousTodos = queryClient.getQueryData(["todos"])
      // 3. Optimistically update to the new value.
      queryClient.setQueryData(["todos"], (old: Todo[]) => [newTodo, ...old])
      // 4. Return a context object with the snapshotted value.
      return { previousTodos }
    },
    // After mutation happened:
    // If the mutation fails, use the context returned from onMutate to roll back.
    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos)
    },
    // Regarless whether the mutation succeeded or failed (error), always invalidate and refetch staled data.
    onSettled: async (_data, _error, _newTodo, _context) => {
      await queryClient.invalidateQueries({
        queryKey: ["todos"],
      })
    },
  })
}
