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
}

module.exports.GamesInfo = GamesInfo
