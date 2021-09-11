const MongoService = require("./loaders/mongo")
const IgdbLoader = require("./loaders/igdbLoader")
const igdbLoader = require("./loaders/igdbLoader")

const retrieveMongo = async () => {
	return await MongoService.getDb()
}

//EXTERNAL FUNCTIONS

const getSort = (sortParam) => {
	switch (sortParam) {
		case "Title":
			return { title: 1 }
		case "Rating":
			return { "score.overall": -1 }
		default:
			return { $natural: -1 }
	}
}

const getFilter = (filterParam) => {
	switch (filterParam) {
		case "Score":
			return { "score.overall": { $gt: 80 } }
		default:
			return null
	}
}

class GamesInfo {
	constructor() {
		//   this.mongoClient = retrieveMongo()
	}

	async allGameInfo() {
		let mongoClient = await retrieveMongo()

		let allgames = await mongoClient.Games.find({})
			.sort({ $natural: -1 })
			.toArray()

		return allgames
	}

	async findOneGame(title) {
		let mongoClient = await retrieveMongo()

		let game = await mongoClient.Games.findOne({ title })

		return game
	}

	async createGame(game) {
		let PossibleGames = []
		const games_info = await IgdbLoader.getId(game.title)

		for (let game_info of games_info) {
			let temp_game = {
				...game,
			}

			const coverArtID = await igdbLoader.getCoverArt(game_info.cover)
			const genres = await igdbLoader.getGenres(game_info.genres)

			temp_game.pic_id = coverArtID
			temp_game.genre = genres
			temp_game.igdb_id = game_info.id
			temp_game.title = game_info.name

			PossibleGames.push(temp_game)
		}

		return {
			PossibleGames,
		}
	}

	async addGame(game) {
		let mongoClient = await retrieveMongo()

		let result = await mongoClient.Games.insertOne(game)

		return result
	}

	async searchGame(params) {
		let mongoClient = await retrieveMongo()

		let filter = getFilter(params.filter)
		let sortMethod = getSort(params.sort)

		let search = params.query
			? { title: { $regex: params.query, $options: "i" } }
			: null

		let sortObj = { ...sortMethod }

		let searchArr = [search, filter]

		searchArr = searchArr.filter((item) => {
			return item != null
		})

		const query = searchArr.length ? { $and: searchArr } : ""

		let result = await mongoClient.Games.find(query).sort(sortObj).toArray()
		// console.log("filters", result)

		return result
	}
}

module.exports.GamesInfo = GamesInfo
