import { Router } from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";
import reservationRoutes from "./reservation.routes";
import loanRoutes from "./loan.routes";
import busStopRoutes from "./busStop.routes";
import deliveryRoutes from "./delivery.routes";
import notificationRoutes from "./notification.routes";
import transactionRoutes from "./transaction.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/books", bookRoutes);
router.use("/reservations", reservationRoutes);
router.use("/loans", loanRoutes);
router.use("/bus-stops", busStopRoutes);
router.use("/deliveries", deliveryRoutes);
router.use("/notifications", notificationRoutes);
router.use("/transactions", transactionRoutes);

export default router;
