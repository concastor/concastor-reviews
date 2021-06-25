
const fetchData = async (method : string, query : string, variables? : object) =>  {
    return fetch('http://localhost:4000/graphql', {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: variables,
        })
    })
}


class backendService {

    getAllGames = async() => {
        const query =     
        `query getGames($title : String){
            getGames(title : $title){
              allGameInfo{
                title
                picLink
                review
                genre
              }
            }
          }`

        let data = await (await fetchData( "POST", query )).json()

        return data.data.getGames.allGameInfo
    }

    getOneGame = async (title : string) => {
        const query =     
        `query getGames($title : String){
            getGames(title : $title){
              findOneGame{
                title
                picLink
                review
                genre
              }
            }
          }`

          const variables = {title}

        let data = await (await fetchData( "POST", query, variables )).json()

        return data.data.getGames.findOneGame
    }

}

export {backendService as bs}
