import express from "express";

const router = express.Router();

router.get("/lectures", (req, res) => {
  res.status(200).json({ message: "lectures" });
});

export default router;
