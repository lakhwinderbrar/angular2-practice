import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-events',
  template: `
  <div class="well">
    <hr/>
    <div>Name: {{eventOb.name}}</div>
    <div>Date(Event): {{eventOb.date}}</div>
    <!--<button (click)="handleClick()">Click me child!!</button>-->
  </div>
  `,
  //styleUrls: ['./events.component.css'],
  styles : [`
    .well > div { color : red}
  `]
})

export class EventsAppComponent {
@Input() eventOb:any;
@Output() eventClick = new EventEmitter();
myText = 'child comp text'

handleClick() {
  console.log("clicked");
  this.eventClick.emit("Clicked");
}

logFoo() {
  console.log('foo')
}

}
