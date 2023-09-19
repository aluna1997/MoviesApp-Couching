import { Component, Input } from '@angular/core';
import { MovieInterface } from 'src/app/pages/home/home.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponentc {
  @Input() public movie: MovieInterface = {
    id: 0,
    name: '',
    description: '',
    image: '',
  };

  constructor() {}
}
