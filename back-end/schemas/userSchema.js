const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
	email: String,
	password: String,
	admin: Boolean,
});

module.exports = userSchema;
