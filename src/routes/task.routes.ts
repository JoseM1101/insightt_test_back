import { Router } from "express"
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompleted,
} from "../controllers/task.controller"
import { validate } from "../middleware/validate"
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validation/task.validation"

const router = Router()

router.get("/:userId", getTasks)

router.post("/", validate(createTaskSchema), createTask)

router.put("/:id", validate(updateTaskSchema), updateTask)

router.delete("/:id", deleteTask)
router.post("/:id/toggle", toggleTaskCompleted)

export default router
