import { Component } from "@angular/core";
import { Square } from "./square";

@Component({
    standalone: true,
    selector: 'board',
    imports: [Square],
    templateUrl: `board.component.html`,
    styleUrl: '../app.component.css'
})
export class Board{
    public squares : string[] = ['','','','','','','','',''];
    public xIsNext : boolean = true;

    public handleClick(i : number){
        if (this.squares[i]) return;
        const nextSquares = this.squares.slice();
        if (this.xIsNext){
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }
        this.squares = nextSquares;
        this.xIsNext = !this.xIsNext;
        // this.squares[i] = "X";
    }
}