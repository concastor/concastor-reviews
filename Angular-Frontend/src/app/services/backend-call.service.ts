import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from 'src/types/Game.type';

// var FormData = require('form-data');

@Injectable({
  providedIn: 'root',
})
export class BackendCallService {
  constructor(private http: HttpClient) {}

  private api_url = environment.api_url;

  //get all games from database
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api_url + '/games');
  }

  //get courses from database
  getOneGame(title: string): Observable<Game> {
    return this.http.post<Game>(this.api_url + '/games/one', { title });
  }

  // createGame = async (game: Game) => {
  // 	try {
  // 		const response = await axios.post(`${API_URL}/games/create`, game)
  // 		return response.data

  // 		//handle error
  // 	} catch (error) {
  // 		console.log(error)
  // 	}
  // }

  // addGameToDb = async (game: Game) => {
  // 	try {
  // 		const response = await axios.post(`${API_URL}/games/add`, game)
  // 		return response
  // 		//handle error
  // 	} catch (error) {
  // 		console.log(error)
  // 	}
  // }

  // searchGame = async (query: string, filter: string, sort: string) => {
  // 	try {
  // 		const response = await axios.post(`${API_URL}/games/search`, {
  // 			query,
  // 			filter,
  // 			sort,
  // 		})
  // 		return response.data
  // 		//handle error
  // 	} catch (error) {
  // 		console.log(error)
  // 	}
  // }
}
