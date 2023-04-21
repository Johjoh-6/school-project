const Teacher = require("../models/teacher.model.js");

class TeacherController {
	async create(req, res) {
		const teacher = new Teacher(req.body);
		try {
			await teacher.save();
			res.status(201).send(teacher);
		} catch (error) {
			res.status(400).send({ error: error });
		}
	}

	async get(req, res) {
		try {
			const teachers = await Teacher.find().populate("users");
			res.send(teachers);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getById(req, res) {
		const _id = req.params.id;
		try {
			const teacher = await Teacher.findById(_id).populate("users");
			if (!teacher) {
				return res.status(404).send();
			}
			res.send(teacher);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async update(req, res) {
		const _id = req.params.id;
		try {
			const teacher = await Teacher.findByIdAndUpdate(_id, req.body);
			if (!teacher) {
				return res.status(404).send({ error: "cannot find teacher" });
			}
			res.send(teacher);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async delete(req, res) {
		const _id = req.params.id;
		try {
			const teacher = await Teacher.findByIdAndDelete(_id);
			if (!teacher) {
				return res.status(404).send({ error: "cannot find teacher" });
			}
			res.send(teacher);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}

module.exports = new TeacherController();
