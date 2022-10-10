import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, interval } from 'rxjs';
import { GameStatus } from 'src/app/core/models';
import { selectGamestatus, selectTimer, decreaseTimer } from 'src/app/core/store';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  /**
   * receives the game status
   */
  gameStatus$ = this.store.select(selectGamestatus);
  /**
   * receives the current time spent to exhibition
   */
  countDown$ = this.store.select(selectTimer);
  /**
   * observable to count the seconds
   */
  secondsInterval$: Observable<number> = interval(1000);
  /**
   * subscription to the seconds observable
   */
  secondsSubscription: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.gameStatus$.subscribe((status: GameStatus) => {
      if (status === 'happening') {
        this.decreaseTimer();
      }
      if (status === 'finished') {
        this.finishTimer();
      }
    })
  }
  
  /**
   * subscribes to second observable to decrease de timer
   */
  private decreaseTimer() {
    this.secondsSubscription = this.secondsInterval$.subscribe(() => {
      this.store.dispatch(decreaseTimer());
    })
  }

  private finishTimer() {
    this.secondsSubscription.unsubscribe();
  }

}
