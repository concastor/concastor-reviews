const MongoService = require("./loaders/mongo")
const IgdbLoader = require("./loaders/igdbLoader")



const retrieveMongo = async() =>{
    return await MongoService.getDb()
}


class GamesInfo {
    constructor() {

    //   this.mongoClient = retrieveMongo()
    }

    async allGameInfo(){

        let mongoClient = await retrieveMongo()
        
        let allgames = await mongoClient.Games.find({}).toArray()


        //TODO: remove, currently for testing
        allgames = [...allgames, ...allgames]
        return  allgames
    }

    async findOneGame(title){
        let mongoClient = await retrieveMongo()

        
        let game = await mongoClient.Games.findOne({title})

        console.log("game", game, title)

        return game
    }

    async getGameInformation(){
        IgdbLoader.getInfo()
    }


}

module.exports.GamesInfo = GamesInfo