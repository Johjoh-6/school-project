const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

class AuthController {
	async register(req, res) {
		const { email } = req.body;
		try {
			const isTaken = await User.isEmailTaken(email);
			if (isTaken) {
				return res.status(400).send({ error: "Email already taken" });
			}
			const user = new User(req.body);
			await user.save();
			const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
			res.header("auth-token", token).send({ token });
		} catch (error) {
			res.status(400).send({ error: error });
		}
	}

	async login(req, res) {
		const { email, password } = req.body;
		if (!(email, password)) return res.status(400).send({ error: "Email and password required" });
		try {
			const user = await User.findOne({ email }).select("+password");
			if (!user) return res.status(400).send({ error: "Email not found" });
			const isMatch = await user.isPasswordMatch(password);
			if (!isMatch) return res.status(400).send({ error: "Invalid password" });
			const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
			res.header("auth-token", token).send({ token });
		} catch (error) {
			res.status(500).send({ error: error });
		}
	}
}

module.exports = new AuthController();
