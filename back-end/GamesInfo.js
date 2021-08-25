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
		let game_info = await IgdbLoader.getId(title)

		let coverArt = await igdbLoader.getCoverArt(game_info.cover)

		return coverArt
	}
}

module.exports.GamesInfo = GamesInfo
