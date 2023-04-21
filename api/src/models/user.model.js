const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid email");
			}
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: [8, "Password must be at least 8 characters"],
		validate(value) {
			if (!value.match(/\d/) && value.match(/[a-zA-Z]/)) {
				throw new Error("Password must contain at least one letter and one number");
			}
		},
		select: false,
	},
	fname: {
		type: String,
		required: false,
		trim: true,
	},
	lname: {
		type: String,
		required: false,
		trim: true,
	},
	role: {
		type: String,
		enum: ["teacher", "student", "staff", "user"],
		default: "user",
		select: false,
	},
	document: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Document",	
			required: false,
		},
	],
	age: Number,
	created_at: Date,
	updated_at: Date,
});

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
	const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
	return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
	const user = this;
	return bcrypt.compare(password, user.password);
};

userSchema.pre("save", async function (next) {
	const now = Date.now();
	const user = this;
	user.updated_at = now;
	if (!user.created_at) {
		user.created_at = now;
	}
	if (user.isModified("password")) {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
	}
	next();
});

/**
 * @typedef User
 */
const User = mongoose.model("User", userSchema);

module.exports = User;
