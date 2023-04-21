const mongoose = require("mongoose");
const app = require("./app");
const env = require("dotenv").config().parsed;
let server;

mongoose.connect(env.MONGODB_URL).then(() => {
	console.info("Connected to MongoDB");
	server = app.listen(env.PORT, () => {
		console.info(`Listening to port ${env.PORT}`);
	});
});

const exitHandler = () => {
	if (server) {
		server.close(() => {
			console.info("Server closed");
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

const unexpectedErrorHandler = (error) => {
	console.error(error);
	exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
	console.info("SIGTERM received");
	if (server) {
		server.close();
	}
});
