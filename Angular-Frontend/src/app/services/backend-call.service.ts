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
    const data = this.http.post<Game>(this.api_url + '/games/one', { title });
    console.log('data', data);
    return data;
  }

  createGame(game: Game): Observable<Game[]> {
    return this.http.post<Game[]>(this.api_url + '/games/create', game);
  }

  addGameToDb(game: Game): Observable<Game> {
    return this.http.post<Game>(this.api_url + '/games/add', game);
  }

  logInUser(email: string, password: string): Observable<any> {
    return this.http.post(this.api_url + '/user/sign', {
      email,
      password,
    });
  }

  createUser(email: string, password: string): Observable<any> {
    return this.http.post(this.api_url + '/user/create', {
      email,
      password,
    });
  }

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
