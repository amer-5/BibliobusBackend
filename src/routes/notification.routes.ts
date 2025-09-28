import { Router } from "express";
import { notificationController } from "../controllers/notification.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// User: list my notifications
router.get("/", authenticate, notificationController.list);

// User: mark notification as read
router.patch("/:id/read", authenticate, notificationController.markAsRead);

export default router;
