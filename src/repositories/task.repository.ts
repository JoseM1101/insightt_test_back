import type { Task } from "@prisma/client"
import { prisma } from "../db/prisma"
import { CreateTaskData, UpdateTaskData } from "../types"

export const findAll = async (userId: string): Promise<Task[]> => {
  return prisma.task.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  })
}
export const create = async (
  data: CreateTaskData,
  userId: string
): Promise<Task> => {
  return prisma.task.create({
    data: {
      title: data.title,
      userId: userId,
    },
  })
}

export const update = async (
  id: string,
  data: UpdateTaskData
): Promise<Task> => {
  return prisma.task.update({
    where: { id },
    data,
  })
}

export const remove = async (id: string): Promise<Task> => {
  return await prisma.task.delete({
    where: { id },
  })
}

export const toggleCompleted = async (id: string): Promise<Task> => {
  const task = await prisma.task.findUnique({ where: { id } })
  if (!task) throw new Error("Task not found")

  return prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  })
}
