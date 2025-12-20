import { Request, Response } from "express"
import * as taskService from "../services/task.service"
import { requireId } from "../utils"
import { getCurrentUserFromToken } from "../utils"

export const getTasks = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization
  if (!authHeader) throw new Error("Authorization header missing")

  const token = authHeader.replace("Bearer ", "")
  const user = await getCurrentUserFromToken(token)

  const tasks = await taskService.getTasks(user.id)
  res.json(tasks)
}

export const createTask = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization
  if (!authHeader) throw new Error("Authorization header missing")

  const token = authHeader.replace("Bearer ", "")
  const user = await getCurrentUserFromToken(token)

  const task = await taskService.createTask(req.body, user.id)
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
