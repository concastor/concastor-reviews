const axios = require("axios")

const TWITCH_URL = "https://id.twitch.tv/oauth2/token"
const IGDB_URL = "https://api.igdb.com/v4/"

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const grant_type = "client_credentials"

// https://api-docs.igdb.com/#examples
// website for all this informaiton

let accessToken

const getAccessToken = async () => {
	let params = {
		client_id,
		client_secret,
		grant_type,
	}
	try {
		let response = await axios.post(TWITCH_URL, {}, { params })
		return response.data
	} catch (e) {
		return error
	}
}

const makeIgdbRequest = async (filters, route) => {
	try {
		return await axios({
			url: `https://api.igdb.com/v4/${route}`,
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": client_id,
				Authorization: `Bearer ${accessToken}`,
			},
			data: filters,
		})
	} catch (error) {
		console.log("error", error)
	}
}

const main = async () => {
	let TokenObj = await getAccessToken()
	console.log("resposne form igdb", TokenObj)

	accessToken = TokenObj.access_token

	let title = "persona 4 golden"

	let filter = 'search "outer wilds"; fields *;'

	let res = await makeIgdbRequest(filter, "games")

	console.log("res", res.data)
	return res.data
}

module.exports = {
	getInfo: async () => {
		let results = await main()
		return results
	},
}
