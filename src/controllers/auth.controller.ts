import { Request, Response } from "express"
import * as authService from "../services/auth.service"

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await authService.signup(email, password)
  res.status(201).json(result)
}

export const confirm = async (req: Request, res: Response) => {
  const { email, code } = req.body
  await authService.confirm(email, code)
  res.json({ message: "User confirmed" })
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const tokens = await authService.login(email, password)
  res.json(tokens)
}

export const logout = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization
  if (!authHeader) throw new Error("Authorization header missing")

  const token = authHeader.replace("Bearer ", "")
  await authService.logout(token)
  res.json({ message: "User logged out" })
}
