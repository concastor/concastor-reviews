const MongoService = require("./loaders/mongo")
const IgdbLoader = require("./loaders/igdbLoader")
const igdbLoader = require("./loaders/igdbLoader")

const retrieveMongo = async () => {
	return await MongoService.getDb()
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

			const coverArtUrl = await igdbLoader.getCoverArt(game_info.cover)
			const genres = await igdbLoader.getGenres(game_info.genres)

			temp_game.picLink = coverArtUrl
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

		let search = params.query
			? { title: { $regex: params.query, $options: "i" } }
			: null

		let searchArr = [search]

		searchArr = searchArr.filter((item) => {
			return item != null
		})

		const query = { $and: searchArr }

		let result = await mongoClient.Games.find(query).toArray()

		return result
	}
}

module.exports.GamesInfo = GamesInfo
