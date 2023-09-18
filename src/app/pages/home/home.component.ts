import { Component } from '@angular/core';
import { MovieInterface } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLoading = true;

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
      id: 5,
      name: 'Pelicula 5',
      description: 'Descripcion de la pelicula 5',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
}
