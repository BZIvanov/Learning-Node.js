// don't forget to register the service in app.module.ts in the providers
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = '?api_key=bfb512f91b83995c3e81cdab049174ae';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THEATERS + API_KEY + '&with_release_type=2|3');
  }
}
