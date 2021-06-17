const express = require('express');
const { graphqlHTTP } = require('express-graphql');
var cors = require('cors');
const { buildSchema } = require('graphql');

const GamesInfo = require('./GamesInfo')

 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type GamesInfo {
    allGameInfo: [Game]
  }
  
  type Game {
    title : String
    genre : [String]
    picLink : String
    review : String
  }

  type Query {
    getGames(title : String) : GamesInfo
  }


`);
 
// The root provides a resolver function for each API endpoint
var root = {
  getGames: ({title}) => {
    return new GamesInfo.GamesInfo(title)
  }
  
};
 

var app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');



// const app = new Realm.App({ id: "<Your App ID>" });
// const credentials = Realm.Credentials.anonymous();
// try {
//   const user = await app.logIn(credentials);
// } catch(err) {
//   console.error("Failed to log in", err);
// }