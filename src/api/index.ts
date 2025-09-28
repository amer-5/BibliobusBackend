import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import { logger } from "../middleware/logger.middleware";
import routes from "../routes/index"; // sve tvoje rute

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

// direktno koristi routes
app.use("/", routes); // nema "/api" prefixa

export default (req: VercelRequest, res: VercelResponse) => app(req, res);
