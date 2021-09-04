require("dotenv").config()
const express = require("express")
const asyncHandler = require("express-async-handler")
const cors = require("cors")
const expressSession = require("express-session")
const passport = require("passport")
const Auth0Strategy = require("passport-auth0")
const path = require("path")

const authRouter = require("./auth")

const GI = require("./GamesInfo")
const API_URL = process.env.API_URL || `http://localhost:4000/api`

let GameInfo = new GI.GamesInfo()

var app = express()
var port = process.env.PORT || 4000

/**
 * Session Configuration
 */

const session = {
	secret: process.env.SESSION_SECRET,
	cookie: {},
	resave: false,
	saveUninitialized: false,
}

if (app.get("env") === "production") {
	console.log("in production")
	// Serve secure cookies, requires HTTPS
	session.cookie.secure = true
}

/**
 * Passport Configuration
 */

const strategy = new Auth0Strategy(
	{
		domain: process.env.AUTH0_DOMAIN,
		clientID: process.env.AUTH0_CLIENT_ID,
		clientSecret: process.env.AUTH0_CLIENT_SECRET,
		callbackURL: process.env.AUTH0_CALLBACK_URL,
	},
	function (accessToken, refreshToken, extraParams, profile, done) {
		/**
		 * Access tokens are used to authorize users to an API
		 * (resource server)
		 * accessToken is the token to call the Auth0 API
		 * or a secured third-party API
		 * extraParams.id_token has the JSON Web Token
		 * profile has all the information from the user
		 */
		return done(null, profile)
	}
)

/**
 * APP Configuration
 */

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))

app.use(expressSession(session))

//passport stuff
passport.use(strategy)
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((user, done) => {
	done(null, user)
})

var router = express.Router()

//register routes
app.use("/api", router)

app.use("/", authRouter)

// ROUTES FOR API
// =============================================================================

//route for user login using passport
app.post("/login", passport.authenticate("local"), function (req, res) {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	res.redirect("/users/" + req.user.username)
})

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

// START THE SERVER
// =============================================================================
app.listen(port)
console.log(`Running a API server at ${API_URL}`)
