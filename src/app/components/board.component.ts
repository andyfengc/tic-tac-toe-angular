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

}