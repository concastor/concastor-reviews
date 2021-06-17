const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://concastor:OKj6pmxBNRnnLxo7@jakescreativeclusters.etaz3.mongodb.net/ReviewSite?retryWrites=true&w=majority"


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function run() {
  try {
    await client.connect();
    const database = client.db('ReviewSite');

    return {
        Games : database.collection('Games')
    }
    
  }catch (e) {
      console.log(e)
  }
}

module.exports = {
    getDb : async () => {
        let db = await run()
        return db
    }
}