import { Request, Response } from "express"
import * as userService from "../services/user.service"
import { requireId } from "../utils"

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, cognitoId } = req.body
    const user = await userService.createUser({ email, cognitoId })
    res.status(201).json(user)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = requireId(req, res)
    if (!id) return

    const user = await userService.getUserById(id)
    if (!user) return res.status(404).json({ message: "User not found" })
    res.json(user)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}
