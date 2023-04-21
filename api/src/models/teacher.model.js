const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
