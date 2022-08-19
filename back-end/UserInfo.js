const MongoService = require("./loaders/mongo");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema");

const userModel = mongoose.model("User", userSchema, "Users");

create_user = async (email, password) => {
	// let mongoClient = await retrieveMongo();

	const new_user = {
		email: email,
		password: await bcrypt.hash(password, 10),
		admin: false,
	};

	return await userModel.create(new_user);

	// await mongoClient.Users.insertOne(new_user);
	// const response = await mongoClient.Users.find({
	// 	email: new_user.email,
	// }).toArray();

	// return response;
};

get_user = async (email, password) => {
	const userInfo = await userModel.find({ email });

	// const userInfo = await mongoClient.Users.find({ email }).toArray();

	if (userInfo.length) {
		if (await bcrypt.compare(password, userInfo[0].password)) {
			return userInfo;
		}
	}
	return [];
};

module.exports = {
	create_user,
	get_user,
};
