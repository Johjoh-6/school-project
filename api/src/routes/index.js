const express = require("express");

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const teacherRoutes = require("./teacher");
const classRoutes = require("./classStudent");

const router = express.Router();

const defaultRoutes = [
	{
		path: "/auth",
		route: authRoutes,
	},
	{
		path: "/users",
		route: usersRoutes,
	},
	{
		path: "/teacher",
		route: teacherRoutes,
	},
	{
		path: "/class",
		route: classRoutes,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
