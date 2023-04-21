const User = require("../models/user.model");

class UsersController {
	async create(req, res) {
		// Check if the user email is already taken
		const email = req.body.email;
		if (await User.isEmailTaken(email)) {
			res.status(400).send({ error: "Email already taken" });
		}
		const user = new User(req.body);
		try {
			await user.save();
			res.status(201).send(user);
		} catch (error) {
			res.status(400).send({ error: error });
		}
	}

	async get(req, res) {
		try {
			const users = await User.find();
			res.send(users);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async getById(req, res) {
		const _id = req.user._id;
		try {
			const user = await User.findById(_id);
			if (!user) {
				return res.status(404).send();
			}
			res.send(user);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async update(req, res) {
		const _id = req.user._id;
		try {
			const user = await User.findByIdAndUpdate(_id, req.body);
			if (!user) {
				return res.status(404).send({ error: "cannot find user" });
			}
			if (req.body.role && user.role !== "staff") {
				return res.status(401).send({ error: "Unauthorized" });
			}
			res.send(user);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}

	async delete(req, res) {
		const _id = req.params.id;
		try {
			const user = await User.findByIdAndDelete(_id);
			if (!user) {
				return res.status(404).send({ error: "cannot find user" });
			}
			res.send(user);
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}

module.exports = new UsersController();
