import "dotenv/config"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"
import { PrismaClient } from "../../generated/prisma/client"

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST!,
  port: parseInt(process.env.DATABASE_PORT!),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false,
  },
})

const prisma = new PrismaClient({
  adapter,
  log: ["query", "info", "warn", "error"],
})

export { prisma }
