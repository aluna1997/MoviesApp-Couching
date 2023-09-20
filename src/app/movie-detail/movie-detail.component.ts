import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../pages/home/home.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  private id: number = 0;
  public movie?: MovieInterface = undefined;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }
}
