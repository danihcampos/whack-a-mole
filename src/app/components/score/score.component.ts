import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectScore } from 'src/app/core/store'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  /**
   * receives the score for exhibition
   */
  currentScore$ = this.store.select(selectScore);

  constructor(private store: Store) { }

}
