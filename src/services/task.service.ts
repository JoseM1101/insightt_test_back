import * as taskRepository from "../repositories/task.repository"
import type { Task } from "../types"

export const getTasks = async (): Promise<Task[]> => {
  return taskRepository.findAll()
}

export const createTask = async (data: Pick<Task, "title">): Promise<Task> => {
  return taskRepository.create(data)
}

export const updateTask = async (
  id: string,
  data: Partial<Task>
): Promise<Task> => {
  return taskRepository.update(id, data)
}

export const deleteTask = async (id: string): Promise<void> => {
  return taskRepository.remove(id)
}

export const toggleTaskCompleted = async (id: string): Promise<Task> => {
  return taskRepository.toggleCompleted(id)
}
