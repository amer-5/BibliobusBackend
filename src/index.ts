import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";

// Logger middleware iz utils ili middleware foldera
import { logger } from "./middleware/logger.middleware";

import authRoutes from "./routes/auth.routes";
import bookRoutes from "./routes/book.routes";
import busStopRoutes from "./routes/busStop.routes";
import deliveryRoutes from "./routes/delivery.routes";
import loanRoutes from "./routes/loan.routes";
import notificationRoutes from "./routes/notification.routes";
import reservationRoutes from "./routes/reservation.routes";
import transactionRoutes from "./routes/transaction.routes";
import userRoutes from "./routes/user.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Rute
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/bus-stops", busStopRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);

// Root endpoint
app.get("/", (_req, res) => {
  res.json({ message: "Bibliobus backend is running!" });
});

// Export za Vercel
export default (req: VercelRequest, res: VercelResponse) => app(req, res);
