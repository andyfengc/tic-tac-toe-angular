import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Square } from './components/square';
import { Board } from "./components/board.component";
import { Game } from './components/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Game, Square, Board],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-toe-angular';

}
