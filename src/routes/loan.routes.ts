import { Router } from "express";
import { loanController } from "../controllers/loan.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

// Librarian: checkout book
router.post("/", authenticate, authorize("LIBRARIAN"), loanController.create);

// User/Admin: list loans
router.get("/", authenticate, loanController.list);

// Librarian: return book
router.patch(
  "/:id/return",
  authenticate,
  authorize("LIBRARIAN"),
  loanController.returnBook,
);

export default router;
