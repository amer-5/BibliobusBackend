import { Router } from "express";
import { transactionController } from "../controllers/transaction.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

// User/Admin: list transactions
router.get("/", authenticate, transactionController.list);

// Admin: create transaction
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  transactionController.create,
);

export default router;
