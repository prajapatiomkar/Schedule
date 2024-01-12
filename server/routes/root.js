import express from "express";
import adminRouter from "./admin.js";
import instructorRouter from "./instructor.js";
const router = express.Router();

router.use("/admin", adminRouter);
router.use("/instructor", instructorRouter);

export default router;
