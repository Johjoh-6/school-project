const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	// for other methods to get the token req.body.token || req.query.token || req.params.token ....
	const token = req.headers["authorization"] ? req.headers["authorization"].split(" ")[1] : null;
	if (!token) {
		return res.status(403).send({ error: "A token is required for authentication" });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send({ error: "Invalid Token" });
	}
	return next();
};

module.exports = verifyToken;
