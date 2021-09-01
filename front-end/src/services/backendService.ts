import axios from "axios"
import type { Game } from "../types/Game.type"

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
			const response = await axios.post(`${API_URL}/games/one`, { title })
			return response.data

			//handle error
		} catch (error) {
			console.log(error)
		}
	}

	createGame = async (game: Game) => {
		try {
			const response = await axios.post(`${API_URL}/games/create`, game)
			return response.data

			//handle error
		} catch (error) {
			console.log(error)
		}
	}

	addGameToDb = async (game: Game) => {
		try {
			const response = await axios.post(`${API_URL}/games/add`, game)
			return response
			//handle error
		} catch (error) {
			console.log(error)
		}
	}

	searchGame = async (query: string) => {
		try {
			const response = await axios.post(`${API_URL}/games/search`, { query })
			return response.data
			//handle error
		} catch (error) {
			console.log(error)
		}
	}
}

export { backendService as bs }
