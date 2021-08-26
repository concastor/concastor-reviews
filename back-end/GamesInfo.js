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

		let allgames = await mongoClient.Games.find({}).toArray()

		//TODO: remove, currently for testing
		allgames = [...allgames, ...allgames]
		return allgames
	}

	async findOneGame(title) {
		let mongoClient = await retrieveMongo()

		let game = await mongoClient.Games.findOne({ title })

		return game
	}

	async createGame(title) {
		const game_info = await IgdbLoader.getId(title)

		console.log("retrieved info", game_info)

		const coverArtUrl = await igdbLoader.getCoverArt(game_info.cover)

		const genres = await igdbLoader.getGenres(game_info.genres)

		return {
			picLink: coverArtUrl,
			igdb_id: game_info.id,
			genre: genres,
		}
	}
}

module.exports.GamesInfo = GamesInfo
