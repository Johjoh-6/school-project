const express = require("express");
const checkRole = require("../middleware/role");
const router = express.Router();
const auth = require("../middleware/auth");
const ScheduleController = require("../controllers/scheduleController");

router.get("/", auth, ScheduleController.get);
router.get("/:id", auth, ScheduleController.getById);
router.post("/", auth, checkRole(["staff"]), ScheduleController.create);
router.put("/:id", auth, checkRole(["staff", "teacher"]), ScheduleController.update);
router.delete("/:id", auth, checkRole(["staff"]), ScheduleController.delete);

module.exports = router;