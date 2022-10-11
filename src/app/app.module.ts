import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from 'src/app/core/store';
import { MainModule } from './main';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ main: gameReducer }),
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
