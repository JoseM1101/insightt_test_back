import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { getUserByCognitoId } from "./services/user.service"

export const requireId = (
  req: Request,
  res: Response,
  key = "id"
): string | null => {
  const id = req.params[key] || req.query[key] || req.body[key]

  if (!id || typeof id !== "string") {
    res.status(400).json({ message: `${key} is required` })
    return null
  }

  return id
}

export const getCurrentUserFromToken = async (token: string) => {
  const decoded = jwt.decode(token) as { sub: string } | null
  if (!decoded) throw new Error("Invalid token")

  const user = await getUserByCognitoId(decoded.sub)
  if (!user) throw new Error("User not found")

  return user
}