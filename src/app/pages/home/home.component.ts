import { Component, OnInit } from '@angular/core';
import { ResponseMoviesInterface } from 'src/app/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies?: ResponseMoviesInterface;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getPopularMovies().subscribe({
      next: (response) => {
        this.movies = response;
        console.log(this.movies);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
