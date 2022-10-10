import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.scss']
})
export class MoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Gets a random time for the mole to be shown and hided
   */
  private getMoleTime() {};

    /**
   * Activates the Mole
   */
  private showMole() {};
  
  /**
   * Hides the Mole after the determined time,
   * dispatch the score decreasing and starts a new process
   */
  private hideMole() {};

  /**
   * Inactivates the Mole, dispatch the score increasing
   * and starts a new process
   */
  private whackMole() {};
}
