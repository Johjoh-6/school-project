const checkRole = (roles) => (req, res, next) => {
  roles.map((role) => {
	  if (req.user && req.user.role === role) {
		  return next();
	  }
  });
	return res.status(401).send({ error: "Unauthorized" });
};

module.exports = checkRole;