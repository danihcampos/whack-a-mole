import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MoleComponent } from 'src/app/components/mole';
import { TimerComponent } from 'src/app/components/timer';
import { ScoreComponent } from 'src/app/components/score';

@NgModule({
  declarations: [
    MainComponent,
    MoleComponent,
    TimerComponent,
    ScoreComponent
  ],
  imports: [CommonModule],
  exports: [MainComponent]
})
export class MainModule { }
