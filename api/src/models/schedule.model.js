const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
	dayOfWeek: {
		type: String,
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	endTime: {
		type: String,
		required: true,
	},
	room: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Room",
		required: true,
	},
	teacher: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Teacher",
		required: true,
	},
	class: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "ClassStudent",
	},
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
