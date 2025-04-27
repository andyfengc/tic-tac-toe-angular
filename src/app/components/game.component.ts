import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { CommonModule, NgFor } from '@angular/common';
import { Board } from "./board.component";
import { SafeHtmlPipe } from "../safehtml.pipe";

@Component({
    selector: 'game',
    standalone: true,
    imports: [Board, SafeHtmlPipe, NgFor],
    templateUrl: './game.component.html',
    styleUrl: '../app.component.css',
})
export class Game implements OnInit {
    history: string[][] = [Array(9).fill(null)];
    currentSquares: string[] = this.history[this.history.length - 1];
    moves: string[] = [];

    ngOnInit(): void {
    }

    public handlePlay(nextSquares: string[]) {
        this.history = [...this.history, nextSquares];
        // show history moves
        this.moves = this.history.map((squares, move) => {
            var description: string;
            if (move > 0) {
                description = 'Go to move #' + move;
            } else {
                description = 'Go to game start';
            }
            var result = 
                `<li><button onclick="() => jumpTo(move)">` + description + `</button></li>`;
            return result;
        });
    }

    public jumpTo(move : number){
        console.log(move);
    }

}