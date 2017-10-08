import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'events',
    template: `
    <!--<button (click)="thumbnail.handleClick()">Click me(parent)</button>-->
    <!--<h3>{{thumbnail.myText}}</h3>-->
    <div>
        <app-events *ngFor="let event of events" #thumbnail [eventOb] = "event" (eventClick)="handleParentClick($event)"></app-events>
        <!--<tr *ngFor="let event of events"><td>{{event.name}}</td></tr>-->
    </div>
    `
})

export class EventListComponent {
    
    private events;

    ngOnInit() {
        this.events = [{
            name : 'Lakhwinder\'s Birthday',
            date : '11/13/1986'
        },
        {
            name : 'Rajwinder\'s Birthday',
            date : '05/21/1990'
        }]
    }

    handleParentClick(event:any) {
        console.log('handleParentClick - ' + event);
    }
}