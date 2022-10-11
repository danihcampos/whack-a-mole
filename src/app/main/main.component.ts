import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setGameStatus, selectGamestatus, selectHighestScore, selectMoles } from 'src/app/core/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectGamestatus$ = this.store.select(selectGamestatus);

  highestScore$ = this.store.select(selectHighestScore);

  selectMoles$ = this.store.select(selectMoles);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  /**
   * Change the status to 'happening'
   */
  startGame() {
    this.store.dispatch(setGameStatus({status: 'happening'}));
  };

}
