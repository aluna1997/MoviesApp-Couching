import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../interfaces/moviedetai.interface';
import { ResponseMoviesInterface } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public apiKey = environment.apiKey;
  public url = 'https://api.themoviedb.org/3';

  constructor(private _httpClient: HttpClient) {}

  getPopularMovies(): Observable<ResponseMoviesInterface> {
    return this._httpClient.get<ResponseMoviesInterface>(
      `${this.url}/movie/popular?api_key=${this.apiKey}&language=es-US&page=1`
    );
  }

  getMovieDetail(id: number): Observable<MovieDetail> {
    return this._httpClient.get<MovieDetail>(
      `${this.url}/movie/${id}?api_key=${this.apiKey}&language=es-US&page=1`
    );
  }
}
