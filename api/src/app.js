const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

// parse json request body
app.use(express.json());
// User body parser
app.use(bodyParser.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// api routes
app.use("/", routes);

// send back a 404 error for any unknown api request
app.use("*", (req, res) => {
	res.status(404).json({
		message: "Page not found",
		error: {
			statusCode: 404,
			message: "You reached a route that is not defined on this server",
		},
	});
});

module.exports = app;