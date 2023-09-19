import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../pages/home/home.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  arrayPeliculas: MovieInterface[] = [
    {
      id: 1,
      name: 'Pelicula 1',
      description: 'Descripcion de la pelicula 1',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 2,
      name: 'Pelicula 2',
      description: 'Descripcion de la pelicula 2',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 3,
      name: 'Pelicula 3',
      description: 'Descripcion de la pelicula 3',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 4,
      name: 'Pelicula 4',
      description: 'Descripcion de la pelicula 4',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      id: 7,
      name: 'Pelicula 5',
      description: 'Descripcion de la pelicula 5',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];

  private id: number = 0;
  public movie?: MovieInterface = undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.movie = this.arrayPeliculas.find((movie) => movie.id === this.id);
    console.log(this.movie);
  }
}
