import { prisma } from "../db/prisma"
import { User } from "../../generated/prisma/client"

export const createUser = async (data: {
  email: string
  cognitoId: string
}): Promise<User> => {
  return prisma.user.create({ data })
}

export const getUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } })
}

export const getUserByCognitoId = async (
  cognitoId: string
): Promise<User | null> => {
  return prisma.user.findUnique({ where: { cognitoId } })
}
