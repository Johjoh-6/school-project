const checkRole = (roles) => (req, res, next) => {
	if (!req.user || !roles.includes(req.user.role)) {
	  return res.status(401).send({ error: "Unauthorized, permissions denied" });
	}
	next();
  };
  

module.exports = checkRole;