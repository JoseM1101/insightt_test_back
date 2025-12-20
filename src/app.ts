import express from "express"
import cors from "cors"
import taskRoutes from "./routes/task.routes"
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/tasks", taskRoutes)
app.use("/auth", authRoutes)
app.use("/users", userRoutes)

export default app
