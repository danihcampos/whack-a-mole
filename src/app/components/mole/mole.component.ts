import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameStatus } from 'src/app/core/models';
import { selectGamestatus, whackAMole, looseAMole } from 'src/app/core/store';
import { getRandomNumber } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.scss']
})
export class MoleComponent implements OnInit, OnDestroy {

  /**
 * Status Subscription
 */
  statusSubscription: any;
  /**
 * Used to apply styles and validate actions
 */
  public isActive: boolean = false;
  /**
 * Game status
 */
  private gameStatus: GameStatus = 'open';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.statusSubscription = this.store.select(selectGamestatus).subscribe((status) => {
      this.gameStatus = status;
      if (status === 'happening') {
        this.showMole();
      };
    });
  }

  /**
 * Activates the Mole in a random time
 */
  private showMole() {
    if (this.gameStatus === 'happening') {
      const timeToShow = getRandomNumber(1000, 7000);

      setTimeout(() => {
        this.isActive = true;
        this.moleCounter();
      }, timeToShow);
    }
  };

  /**
* Keeps the Mole active for a random time
* Calls the loose after the time
*/
  private moleCounter() {
    const timeActive = getRandomNumber(1000, 3000);
    setTimeout(() => {
      this.hideMole();
    }, timeActive)
  }

  /**
   * Hides the Mole after the determined time,
   * dispatch the score decreasing and starts a new process
   */
  private hideMole() {
    if (this.isActive && this.gameStatus === 'happening') {
      this.store.dispatch(looseAMole());
      this.isActive = false;
      this.showMole();
    };
  };

  /**
   * Inactivates the Mole, dispatch the score increasing
   * and starts a new process
   */
  private whackMole() {
    this.store.dispatch(whackAMole());
    this.isActive = false;
    this.showMole();
  };

  /**
 * Reacts on click
 */
  clickOnMole() {
    if (!this.isActive) {
      return;
    }
    this.whackMole();
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }
}
