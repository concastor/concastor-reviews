const mongoose = require("mongoose");
const { Schema } = mongoose;
const gameSchema = new Schema({
	title: String,
	review: String,
	igdb_id: String,
	pic_id: String,
	genre: Array,
	score: Schema.Types.Mixed,
});

module.exports = gameSchema;