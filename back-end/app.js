require("dotenv").config();
const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

const GameInfo = require("./GamesInfo");
const UserInfo = require("./UserInfo");
const API_URL = process.env.API_URL;

// const { connection } = require("./loaders/mongo");

var app = express();

//setup middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression()); //Compress all routes
app.use(helmet());

var port = process.env.PORT || 4000;
var router = express.Router();

//register routes
app.use("/api", router);

app.get("/", function (req, res) {
	res.json({
		message: `your on the server but not the api, try going here ${API_URL}/api`,
	});
});

// ROUTES FOR API
// =============================================================================
// default route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get("/", function (req, res) {
	res.json({
		message:
			"you've entered the API's private space, I hope you invited it to dinner first",
	});
});
//route to get all games
router.get(
	"/games",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.allGameInfo();
		res.status(200).json(response);
	})
);

//route for searching a specific game
router.post(
	"/games/one",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.findOneGame(req.body.title);
		res.status(200).json(response[0]);
	})
);

//route for getting possible games
router.post(
	"/games/create",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.getPossibleGames(req.body);
		res.status(200).json(response);
	})
);

router.post(
	"/games/add",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.addGame(req.body);
		res.status(201).json(response);
	})
);

router.post(
	"/games/search",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.searchGame(req.body);
		res.status(200).json(response);
	})
);

//route to create a user
router.post(
	"/user/create",
	asyncHandler(async (req, res) => {
		let response = await UserInfo.create_user(
			req.body.email,
			req.body.password
		);

		res.status(201).json(response);
	})
);

//route to log in
router.post(
	"/user/sign",
	asyncHandler(async (req, res) => {
		let response = await UserInfo.get_user(req.body.email, req.body.password);
		res.status(200).json(response);
	})
);

// START THE SERVER
// =============================================================================
app.listen(port);
if (process.env.NODE_ENV === "production")
	console.log(`Running a production API server at ${API_URL}`);
else console.log(`Running a API server at ${API_URL}`);
