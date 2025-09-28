// api/index.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import routes from "../src/routes"; // sve tvoje rute
import { logger } from "../src/middleware/logger.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Direktno koristi sve rute
app.use("/", routes);

// Export za Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
