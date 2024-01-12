import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.status(200).json({ message: "signup" });
});

router.post("/signin", (req, res) => {
  res.status(200).json({ message: "signin" });
});

router.delete("/signout", (req, res) => {
  res.status(200).json({ message: "logout" });
});

export default router;
