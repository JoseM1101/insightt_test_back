import { Router } from "express"
import * as userController from "../controllers/user.controller"
import { authenticate } from "../middleware/cognitoAuth"

const router = Router()

router.use(authenticate)

router.post("/", userController.createUser)
router.get("/:id", userController.getUser)

export default router
