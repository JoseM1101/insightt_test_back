import { Request, Response } from "express"
import * as taskService from "../services/task.service"

const requireId = (req: Request, res: Response): string | null => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ message: "id is required" })
    return null
  }
  return id
}

export const getTasks = async (req: Request, res: Response) => {
  if (!req.params.userId) return

  const tasks = await taskService.getTasks(req.params.userId)
  res.json(tasks)
}

export const createTask = async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body, "user-1")
  res.status(201).json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const id = requireId(req, res)
  if (!id) return

  const task = await taskService.updateTask(id, req.body)
  res.json(task)
}

export const deleteTask = async (req: Request, res: Response) => {
  const id = requireId(req, res)
  if (!id) return

  await taskService.deleteTask(id)
  res.status(204).send()
}

export const toggleTaskCompleted = async (req: Request, res: Response) => {
  const id = requireId(req, res)
  if (!id) return

  const task = await taskService.toggleTaskCompleted(id)
  res.json(task)
}
