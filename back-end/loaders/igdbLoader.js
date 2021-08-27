const axios = require("axios")

const TWITCH_URL = "https://id.twitch.tv/oauth2/token"

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const grant_type = "client_credentials"

// https://api-docs.igdb.com/#examples
// website for all this informaiton

let accessToken

/**
 * Gets bearer token for API Authentication
 */
const getAccessToken = async () => {
	let params = {
		client_id,
		client_secret,
		grant_type,
	}
	try {
		let response = await axios.post(TWITCH_URL, {}, { params })
		accessToken = response.data
	} catch (e) {
		console.log("authetication error", e)
	}
}

/**
 * checks if bearer token is needed or expired
 */
const checkTokenAuth = async () => {
	if (!accessToken || accessToken.expires_in <= 0) {
		console.log("authenticating...")
		await getAccessToken()
	} else {
		console.log("already authenticated")
	}
}

/**
 * general function for making requests to IGDB
 *
 * @param {string} filters The provided filters for endpoint.
 * @param {string} route the requested endpoint for the api.
 * @return {object} the retrieved information.
 */
const makeIgdbRequest = async (filters, route) => {
	await checkTokenAuth()

	try {
		return await axios({
			url: `https://api.igdb.com/v4${route}`,
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": client_id,
				Authorization: `Bearer ${accessToken.access_token}`,
			},
			data: filters,
		})
	} catch (error) {
		console.log("error", error.data)
	}
}

/**
 * makes request to IGDB api for game id based on title
 *
 * @param {string} title The title of the game that is being searched.
 * @return {string} the IGDB id of the game.
 */
const getIgdbId = async (title) => {
	const filter = `search "${title}"; fields id, cover, genres, name; where version_parent = null;`
	const route = "/games"

	let res = await makeIgdbRequest(filter, route)
	return res.data //returns most likely option
}

const getGameCover = async (game_id) => {
	const filter = `fields *; where id = ${game_id};`
	const route = "/covers"

	let res = await makeIgdbRequest(filter, route)

	let coverInfo = res.data[0]

	return `https://images.igdb.com/igdb/image/upload/t_cover_big/${coverInfo.image_id}.jpg`
}

const getGameGenres = async (genres) => {
	const filter = `fields name; where id = (${genres});`
	const route = "/genres"

	let res = await makeIgdbRequest(filter, route)
	return res ? res.data : []
}

module.exports = {
	getId: async (title) => {
		return await getIgdbId(title)
	},
	getCoverArt: async (game_id) => {
		return await getGameCover(game_id)
	},
	getGenres: async (genres) => {
		return await getGameGenres(genres)
	},
}
