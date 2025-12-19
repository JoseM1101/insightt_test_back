import { Request, Response } from "express"
import * as taskService from "../services/task.service"
import type { TaskParams } from "../types"

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await taskService.getTasks()
  res.json(tasks)
}

export const createTask = async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body)
  res.status(201).json(task)
}

export const updateTask = async (req: Request<TaskParams>, res: Response) => {
  const task = await taskService.updateTask(req.params.id, req.body)
  res.json(task)
}

export const deleteTask = async (req: Request<TaskParams>, res: Response) => {
  await taskService.deleteTask(req.params.id)
  res.status(204).send()
}

export const toggleTaskCompleted = async (
  req: Request<TaskParams>,
  res: Response
) => {
  const task = await taskService.toggleTaskCompleted(req.params.id)
  res.json(task)
}
