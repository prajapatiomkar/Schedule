import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from server!" });
});

app.listen(6789, () => {
  console.log("server is up and running!");
});
