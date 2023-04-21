const express = require("express");
const router = express.Router();
const checkRole = require("../middleware/role");
const auth = require("../middleware/auth");
const TeacherController = require("../controllers/teacherController");

const teacher = "teacher";
const admin = "staff";
router.get("/", auth, checkRole([admin]), TeacherController.get);
router.get("/:id", auth, checkRole([teacher, admin]), TeacherController.getById);
router.put("/:id", auth, checkRole([teacher, admin]), TeacherController.update);
router.delete("/:id", auth, checkRole([teacher, admin]), TeacherController.delete);


module.exports = router;
