const { MongoClient } = require("mongodb");

//TODO: change to env variable
const uri = "mongodb+srv://concastor:OKj6pmxBNRnnLxo7@jakescreativeclusters.etaz3.mongodb.net/ReviewSite?retryWrites=true&w=majority"

let Database



async function run() {
    //checking if database is already connected
    if(typeof database === "undefined"){
        try {
            const client = new MongoClient(uri, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });

            await client.connect();
            database  = client.db('ReviewSite');
        
            return {
                Games : database.collection('Games')
            }
      
        }catch (e) {
            console.log(e)
        }
    }else{
        return {
            Games : database.collection('Games')
        }
    }

}

module.exports = {
    getDb : async () => {
        let db = await run()
        return db
    }
}