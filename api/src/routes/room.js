const express = require("express");
const checkRole = require("../middleware/role");
const router = express.Router();
const auth = require("../middleware/auth");
const RoomController = require("../controllers/roomController");


router.get("/", auth, checkRole(["staff", "teacher"]) ,RoomController.get);
router.get("/:id", auth, checkRole(["staff", "teacher"]), RoomController.getById);
router.post("/", auth, checkRole(["staff"]), RoomController.create);
router.put("/:id", auth, checkRole(["staff"]), RoomController.update);
router.delete("/:id", auth, checkRole(["staff"]), RoomController.delete);

module.exports = router;

