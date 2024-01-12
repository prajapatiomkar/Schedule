import express from "express";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";
import rootRouter from "./routes/root.js";

const app = express();

app.use("/", rootRouter);
app.use("/auth", authRouter);

app.listen(6789, () => {
  console.log("server is up and running!");
});
