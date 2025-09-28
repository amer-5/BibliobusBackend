import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import routes from "../routes"; // import index.ts iz routes foldera
import { logger } from "../middleware/logger.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/", routes); // sve tvoje rute iz routes/index.ts

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
