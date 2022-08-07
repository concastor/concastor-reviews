require("dotenv").config()
const express = require("express")
const asyncHandler = require("express-async-handler")
const cors = require("cors")

const GI = require("./GamesInfo")
const UI = require("./UserInfo")
const API_URL = process.env.API_URL || `http://localhost:4000/api`

let GameInfo = new GI.GamesInfo()
let UserInfo = new UI.UserInfo()

var app = express()

//setup middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var port = process.env.PORT || 4000
var router = express.Router()

//register routes
app.use("/api", router)

// ROUTES FOR API
// =============================================================================

// default route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get("/", function (req, res) {
	res.json({
		message:
			"you've entered the API's private space, I hope you invited it to dinner first",
	})
})

//route to get all games
router.get(
	"/games",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.allGameInfo()
		res.json(response)
	})
)

//route for searching a specific game
router.post(
	"/games/one",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.findOneGame(req.body.title)
		res.json(response)
	})
)

//route for searching a specific game
router.post(
	"/games/create",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.createGame(req.body)
		res.json(response)
	})
)

router.post(
	"/games/add",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.addGame(req.body)
		res.json(response)
	})
)

router.post(
	"/games/search",
	asyncHandler(async (req, res) => {
		let response = await GameInfo.searchGame(req.body)
		res.json(response)
	})
)

//route to create a user
router.post(
	"/user/create",
	asyncHandler(async (req, res) => {
		let response = await UserInfo.create_user(req.body.email, req.body.password)

		console.log("res")
		res.json(response)
	})
)

//route to log in
router.post(
	"/user/sign",
	asyncHandler(async (req, res) => {
		// console.log("body", req.body)

		let response = await UserInfo.get_user(req.body.email, req.body.password)

		console.log("info", response)
		res.json(response)
	})
)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log(`Running a API server at ${API_URL}`)
