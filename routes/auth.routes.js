import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { registerSchema, loginSchema } from "../schemas/user.schema.js";
const router = Router();
router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.get("/me", authenticate, authController.me); // authMiddleware se dodaje unutar authController.me ili ovdje ako postoji
export default router;
