const express = require("express");
const UsersController = require("../controllers/usersController");
const DocumentController = require("../controllers/documentController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role");

const router = express.Router();

router.get("/", auth, UsersController.getById);
router.put("/", auth, UsersController.update);
router.get("/students", auth, checkRole(["staff"]), UsersController.getAllStudents);
router.post("/add_documents", auth, DocumentController.create);
router.get("/documents", auth, DocumentController.get);


module.exports = router;
