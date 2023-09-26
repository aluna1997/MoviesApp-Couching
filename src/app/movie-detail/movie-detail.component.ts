import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from '../interfaces/moviedetai.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  private id: number = 0;
  public movieDetail?: MovieDetail = undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _moviesService: MoviesService
  ) {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    this._moviesService.getMovieDetail(this.id).subscribe({
      next: (response) => {
        this.movieDetail = response;
        console.log(this.movieDetail);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
