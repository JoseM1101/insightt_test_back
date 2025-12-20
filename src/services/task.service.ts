import * as taskRepository from "../repositories/task.repository"
import type { Task } from "@prisma/client"
import { CreateTaskData, UpdateTaskData } from "../types"

export const getTasks = async (userId: string): Promise<Task[]> => {
  return taskRepository.findAll(userId)
}

export const createTask = async (
  data: CreateTaskData,
  userId: string
): Promise<Task> => {
  return taskRepository.create(data, userId)
}

export const updateTask = async (
  id: string,
  data: UpdateTaskData
): Promise<Task> => {
  return taskRepository.update(id, data)
}

export const deleteTask = async (id: string): Promise<Task> => {
  return taskRepository.remove(id)
}

export const toggleTaskCompleted = async (id: string): Promise<Task> => {
  return taskRepository.toggleCompleted(id)
}
