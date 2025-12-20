import { Router } from "express"
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskCompleted,
} from "../controllers/task.controller"
import { validate } from "../middleware/validate"
import { authenticate } from "../middleware/cognitoAuth"
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validation/task.validation"

const router = Router()

router.use(authenticate)

router.get("/", getTasks)
router.post("/", validate(createTaskSchema), createTask)
router.patch("/:id", validate(updateTaskSchema), updateTask)
router.delete("/:id", deleteTask)
router.post("/:id/toggle", toggleTaskCompleted)

export default router
