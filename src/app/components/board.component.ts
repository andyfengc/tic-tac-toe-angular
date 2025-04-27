import { Component, OnInit } from "@angular/core";
import { Square } from "./square";

@Component({
    standalone: true,
    selector: 'board',
    imports: [Square],
    templateUrl: `board.component.html`,
    styleUrl: '../app.component.css'
})
export class Board implements OnInit {
    public squares: string[] = ['', '', '', '', '', '', '', '', ''];
    public xIsNext: boolean = true;

    // show status
    public status: string = '';
    public showStatus() {
        const winner = this.calculateWinner(this.squares);
        if (winner) {
            this.status = "Winner: " + winner;
        } else {
            this.status = "Next player: " + (this.xIsNext ? "X" : "O");
        }
    }
 
    ngOnInit(): void {
        this.showStatus();
    }

    public handleClick(i: number) {
        if (this.squares[i] || this.calculateWinner(this.squares)) return;
        const nextSquares = this.squares.slice();
        if (this.xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        this.squares = nextSquares;
        this.xIsNext = !this.xIsNext;
        this.showStatus();
        // this.squares[i] = "X";
    }

    calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}