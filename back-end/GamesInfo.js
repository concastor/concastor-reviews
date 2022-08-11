const MongoService = require("./loaders/mongo");
const IgdbLoader = require("./loaders/igdbLoader");
const igdbLoader = require("./loaders/igdbLoader");
const mongoose = require("mongoose");
const gameSchema = require("./schemas/gameSchema");
const gameModel = mongoose.model("Game", gameSchema, "Games");

//EXTERNAL FUNCTIONS

const getSort = (sortParam) => {
	switch (sortParam) {
		case "Title":
			return { title: 1 };
		case "Rating":
			return { "score.overall": -1 };
		default:
			return { $natural: -1 };
	}
};

const getFilter = (filterParam) => {
	switch (filterParam) {
		case "Score":
			return { "score.overall": { $gt: 80 } };
		default:
			return null;
	}
};

//EXPORTED FUNCTIONS

allGameInfo = async () => {
	return await gameModel.find({}).sort({ $natural: -1 });
};

findOneGame = async (title) => {
	return await gameModel.find({ title });
};

getPossibleGames = async (game) => {
	let PossibleGames = [];
	const games_info = await IgdbLoader.getId(game.title);

	for (let game_info of games_info) {
		let temp_game = {
			...game,
		};

		const coverArtID = await igdbLoader.getCoverArt(game_info.cover);
		const genres = await igdbLoader.getGenres(game_info.genres);

		temp_game.pic_id = coverArtID;
		temp_game.genre = genres;
		temp_game.igdb_id = game_info.id;
		temp_game.title = game_info.name;

		PossibleGames.push(temp_game);
	}

	return PossibleGames;
};

addGame = async (game) => {
	return await gameModel.create(game);
};

searchGame = async (params) => {
	let filter = getFilter(params.filter);
	let sortMethod = getSort(params.sort);

	let search = params.query
		? { title: { $regex: params.query, $options: "i" } }
		: null;

	let sortObj = { ...sortMethod };

	let searchArr = [search, filter];

	searchArr = searchArr.filter((item) => {
		return item != null;
	});

	const query = searchArr.length ? { $and: searchArr } : "";

	return await gameModel.find(query).sort(sortObj);
};

module.exports = {
	allGameInfo,
	findOneGame,
	getPossibleGames,
	addGame,
	searchGame,
};
