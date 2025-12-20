import * as userRepo from "../repositories/user.repository"
import { User } from "../../generated/prisma/client"

export const createUser = async (data: {
  email: string
  cognitoId: string
}): Promise<User> => {
  const existing = await userRepo.getUserByCognitoId(data.cognitoId)
  if (existing) throw new Error("User already exists")

  return userRepo.createUser(data)
}

export const getUserById = async (id: string): Promise<User | null> => {
  return userRepo.getUserById(id)
}

export const getUserByCognitoId = async (id: string): Promise<User | null> => {
  return userRepo.getUserByCognitoId(id)
}
