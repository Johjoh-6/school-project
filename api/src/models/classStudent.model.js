const mongoose = require("mongoose");

const classStudentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	students: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

const ClassStudent = mongoose.model("ClassStudent", classStudentSchema);

module.exports = ClassStudent;
