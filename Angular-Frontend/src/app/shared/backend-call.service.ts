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

  //get courses from database
  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api_url + '/games');
  }
}
