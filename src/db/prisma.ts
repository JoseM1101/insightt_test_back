import { PrismaClient } from "@prisma/client"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"

declare global {
  var prisma: PrismaClient | undefined
}

const adapter = new PrismaMariaDb({
  host: process.env["DB_HOST"]!,
  port: Number(process.env["DB_PORT"]),
  connectionLimit: 5,
})

export const prisma =
  global.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}
