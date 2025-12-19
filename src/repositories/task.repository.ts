import type { Task } from "../types"

export const findAll = async (): Promise<Task[]> => {
  return []
}

export const create = async (data: Pick<Task, "title">): Promise<Task> => {
  return {} as Task
}

export const update = async (
  id: string,
  data: Partial<Task>
): Promise<Task> => {
  return {} as Task
}

export const remove = async (_id: string): Promise<void> => {
  return
}

export const toggleCompleted = async (id: string): Promise<Task> => {
  return {} as Task
}
