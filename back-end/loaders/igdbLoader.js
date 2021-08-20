const axios = require('axios');


const TWITCH_URL = "https://id.twitch.tv/oauth2/token"
const IGDB_URL = "https://api.igdb.com/v4/games"

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const grant_type="client_credentials"

// https://api-docs.igdb.com/#examples
// website for all this informaiton

let accessToken 


const getAccessToken = async () => {
    let params = {
        client_id,
        client_secret,
        grant_type
    }

    try{
        let response = await axios.post(TWITCH_URL, {}, {params})
        return response.data;
    }catch (e) {
        return error;
    }
}

const makeIgdbRequest = async (data) => {
    let config = {
        headers:{
            'Client-ID' : client_id,
            'Authorization' : `Bearer ${accessToken}`
        }
    }

    try{
        let response = await axios.post(IGDB_URL, data, config)
        return response.data;
    }catch (e) {
        return error;
    }
}



const main = async () => {
    let accessToken = await getAccessToken()
    console.log("token form twitch ", token)
}



module.exports = {
    getInfo : async () => {
        let results = await main()
        return results
    }
}