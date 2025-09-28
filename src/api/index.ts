import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import routes from "../routes/index";
import { logger } from "../middleware/logger.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ message: "Bibliobus backend is running!" });
});

// Ovo je ključ: eksportujemo **handler** umjesto app.listen
export default (req: VercelRequest, res: VercelResponse) => app(req, res);
