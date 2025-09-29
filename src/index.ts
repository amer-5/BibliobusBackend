import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js"; // sve tvoje rute
import { logger } from "./middleware/logger.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("API is running");
});

export default (req: VercelRequest, res: VercelResponse) => app(req, res);
