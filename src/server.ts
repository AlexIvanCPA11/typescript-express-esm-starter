import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mainRoute from "./routes/mainRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use(mainRoute);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
