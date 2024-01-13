import express from "express";
import { signin, signout, signup } from "../controllers/instructor.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.delete("/signout", signout);

export default router;
