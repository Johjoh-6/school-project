const express = require("express");
const checkRole = require("../middleware/role");
const router = express.Router();
const auth = require("../middleware/auth");
const ClassStudentController = require("../controllers/classStudentController");

const staff = "staff";
const teacher = "teacher";
const student = "student";


router.get("/", auth, checkRole([staff, teacher]) ,ClassStudentController.get);
router.get("/:id", auth, checkRole([staff, student, teacher]), ClassStudentController.getById);
router.post("/", auth, checkRole([staff]), ClassStudentController.create);
router.put("/:id", auth, checkRole([staff]), ClassStudentController.update);
router.delete("/:id", auth, checkRole([staff]), ClassStudentController.delete);

module.exports = router;