import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    standalone: true,
    selector: 'square',
    templateUrl: `square.html`,
    styleUrl: '../app.component.css'
})
export class Square{
    @Input() value : string = '';
    @Output() onSquareClick = new EventEmitter<any>();
    public clickSquare(){
      this.onSquareClick.emit();
    }
}