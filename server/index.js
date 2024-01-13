import express from "express";
import authRouter from "./routes/auth.js";
import rootRouter from "./routes/root.js";
import connectDB from "./config/dbConnection.js";
import { configDotenv } from "dotenv";
const app = express();
connectDB();
configDotenv();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(6789, () => {
  console.log("server is up and running!");
});
