import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import routes from "./routes/index"; // prilagodi path
import { logger } from "./middleware/logger.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Sve tvoje rute
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ message: "Bibliobus backend is running!" });
});

// Eksportuješ Express app kao serverless handler
export default app;
