import express from "express";
import cors from "cors";
import routes from "./routes/index";
import { env } from "./config/env";
import { logger } from "./middleware/logger.middleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({ message: "Bibliobus backend is running!" });
});

const PORT = env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
