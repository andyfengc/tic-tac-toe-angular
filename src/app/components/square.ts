import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'square',
    templateUrl: `square.html`,
    styleUrl: '../app.component.css'
})
export class Square{
    @Input() value : string = '';
    public handleClick(){
      console.log('clicked');
    }
}