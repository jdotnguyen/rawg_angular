import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // Base URL
  baseUrl: string = 'https://api.rawg.io/api/'

  constructor(
    private http: HttpClient
  ) { }

  getLatestGames() {
    let endpoint = `${this.baseUrl}games`;

    return this.http.get(endpoint);
  }
}
