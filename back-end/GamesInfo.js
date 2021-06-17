const MongoService = require("./loaders/mongo")


const retrieveMongo = async() =>{
    return await MongoService.getDb()
}


class GamesInfo {
    constructor(title) {
      this.title = title;
    //   this.mongoClient = retrieveMongo()
    }

    async allGameInfo(){
        let mongoClient = await retrieveMongo()
        
        let allgames = await mongoClient.Games.find({}).toArray()

        //TODO: remove, currently for testing
        allgames = [...allgames, ...allgames]
        return  allgames
    }

}

module.exports.GamesInfo = GamesInfo