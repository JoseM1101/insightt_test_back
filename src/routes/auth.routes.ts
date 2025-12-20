import { Router } from "express"
import * as authController from "../controllers/auth.controller"
import { validate } from "../middleware/validate"
import { loginSchema, signupSchema } from "../validation/auth.validation"
import { authenticate } from "../middleware/cognitoAuth"

const router = Router()

router.post("/signup", validate(signupSchema), authController.signup)
router.post("/confirm", authController.confirm)
router.post("/login", validate(loginSchema), authController.login)
router.post("/logout", authenticate, authController.logout)

export default router
