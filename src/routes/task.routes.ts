import { Router } from "express"
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompleted,
} from "../controllers/task.controller"

const router = Router()

router.get("/", getTasks)
router.post("/", createTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)
router.post("/:id/toggle", toggleTaskCompleted)

export default router
