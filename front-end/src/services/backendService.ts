import axios from "axios"

// const API_URL = process.env.API_URL || `http://localhost:4000/api`
const API_URL = `http://localhost:4000/api`

axios.defaults.headers.common = {
	"Content-Type": "application/json",
	Accept: "application/json",
}

class backendService {
	getAllGames = async () => {
		try {
			const response = await axios.get(`${API_URL}/games`)
			return response.data

			//handle error
		} catch (error) {
			console.log(error)
		}
	}

	getOneGame = async (title: string) => {
		try {
			const response = await axios.post(`${API_URL}/search/game`, { title })

			console.log("response", response)
			return response.data

			//handle error
		} catch (error) {
			console.log(error)
		}
	}
}

export { backendService as bs }
