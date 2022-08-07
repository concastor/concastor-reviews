const { MongoClient } = require("mongodb")

const MONGO_URL = process.env.MONGO_CONNECTION

let database

//connection to the database and returns the collections
async function initDB() {
	//checking if database is already connected
	if (typeof database === "undefined") {
		try {
			const client = new MongoClient(MONGO_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})

			await client.connect()
			database = client.db("ReviewSite")

			return {
				Games: database.collection("Games"),
				Users: database.collection("Users"),
			}
		} catch (e) {
			console.log(e)
		}
	} else {
		return {
			Games: database.collection("Games"),
			Users: database.collection("Users"),
		}
	}
}

module.exports = {
	getDb: async () => {
		let db = await initDB()
		return db
	},
}
