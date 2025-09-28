import { Router } from "express";
import { deliveryController } from "../controllers/delivery.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

// Driver/Admin: list deliveries
router.get(
  "/",
  authenticate,
  authorize("ADMIN", "DRIVER"),
  deliveryController.list,
);

// Driver/Admin: create delivery
router.post(
  "/",
  authenticate,
  authorize("ADMIN", "DRIVER"),
  deliveryController.create,
);

// Driver/Admin: update delivery status
router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN", "DRIVER"),
  deliveryController.update,
);

export default router;
