import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  // Base URL
  baseUrl: string = 'https://api.rawg.io/api/'

  constructor(
    private http: HttpClient
  ) { }

  getGenres() {
    let endpoint = `${this.baseUrl}genres`;

    return this.http.get(endpoint);
  }
}
