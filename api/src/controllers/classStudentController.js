const ClassStudent = require("../models/classStudent.model");

class ClassStudentController {
	async create(req, res) {
		try {
			const classStudent = new ClassStudent();
			const studentsList = req.body;
			studentsList.forEach(async (student) => {
				const stud = await Student.findById(student);
				if(stud) {
					classStudent.users.push(stud);
				}
			});
			await classStudent.save();
			res.status(201).send(classStudent);
		} catch (error) {
			res.status(400).send({ error: error });
		}
	}

	async get(req, res) {
		try {
			const classStudents = await ClassStudent.find().populate("user");
			res.send(classStudents);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getById(req, res) {
		const _id = req.params.id;
		try {
			const classStudent = await ClassStudent.findById(_id).populate("user");
			if (!classStudent) {
				return res.status(404).send();
			}
			res.send(classStudent);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async update(req, res) {
		const _id = req.params.id;
		try {
			const classStudent = await ClassStudent.findByIdAndUpdate(_id, req.body);
			if (!classStudent) {
				return res.status(404).send({ error: "cannot find classStudent" });
			}
			res.send(classStudent);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async delete(req, res) {
		const _id = req.params.id;
		try {
			const classStudent = await ClassStudent.findByIdAndDelete(_id);
			if (!classStudent) {
				return res.status(404).send({ error: "cannot find classStudent" });
			}
			res.send(classStudent);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}

module.exports = new ClassStudentController();
