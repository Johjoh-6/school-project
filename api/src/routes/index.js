const express = require("express");

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const teacherRoutes = require("./teacher");
const classRoutes = require("./classStudent");
const roomRoutes = require("./room");
const scheduleRoutes = require("./schedule");

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
	{
		path: "/room",
		route: roomRoutes,
	},
	{
		path: "/schedule",
		route: scheduleRoutes,
	}
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
