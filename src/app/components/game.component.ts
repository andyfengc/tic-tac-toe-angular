import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { NgFor } from '@angular/common';
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
    xIsNext : boolean = true;
    history: string[][] = [Array(9).fill(null)];
    currentMove : number = 0;
    currentSquares: string[] = this.history[this.currentMove];

    moves: string[] = []; // obsolete

    ngOnInit(): void {
    }

    public handlePlay(nextSquares: string[]) {
        this.history = [...this.history.slice(0, this.currentMove + 1), nextSquares];
        this.currentMove = this.history.length - 1;
        this.xIsNext = !this.xIsNext;

        // show history moves, obsolete, not support click
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
        this.currentMove = move;
        this.currentSquares = this.history[this.currentMove];

        this.xIsNext = move % 2 === 0;
    }

}