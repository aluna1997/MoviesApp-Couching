import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponentc {
  @Input() public movie: Result | undefined;
  constructor() {}
}
