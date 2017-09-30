import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-events',
  template: `<p>
                abcd events works! {{eventOb.name}}
            </p>
            <button (click)="handleClick()">Click me</button>
            `,
  styleUrls: ['./events.component.css']
})

export class EventsAppComponent {
@Input() eventOb:any;
@Output() eventClick = new EventEmitter();

handleClick() {
  console.log("clicked");
  this.eventClick.emit("Clicked");
}

}
