const MongoService = require("./loaders/mongo")
const bcrypt = require("bcrypt")

const retrieveMongo = async () => {
	return await MongoService.getDb()
}

class UserInfo {
	constructor() {}

	async create_user(email, password) {
		let mongoClient = await retrieveMongo()

		const new_user = {
			email: email,
			password: await bcrypt.hash(password, 10),
			admin: false,
		}

		await mongoClient.Users.insertOne(new_user)
		const response = await mongoClient.Users.find({
			email: new_user.email,
		}).toArray()

		return response
	}

	async get_user(email, password) {
		let mongoClient = await retrieveMongo()

		const userInfo = await mongoClient.Users.find({ email }).toArray()

		if (userInfo.length) {
			if (await bcrypt.compare(password, userInfo[0].password)) {
				return userInfo
			}
		}
		return []
	}
}

module.exports.UserInfo = UserInfo
