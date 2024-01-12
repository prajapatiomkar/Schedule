import express from "express";

const router = express.Router();

router.get("/instructors", (req, res) => {
  res.status(200).json({
    message: "instructors",
  });
});

// {Name, Level, Description, Image} = req.body
router.get("/courses", (req, res) => {
  res.status(200).json({
    message: "courses",
  });
});

// {Instructor, Date} = req.body
router.get("/courses/:courseId/lectures", (req, res) => {
  res.status(200).json({
    message: "courses",
  });
});

export default router;
