import {Component, OnInit} from '@angular/core'
import {EventService} from './event.service'
@Component({
    selector: 'events',
    template: `
    <!--<button (click)="thumbnail.handleClick()">Click me(parent)</button>-->
    <!--<h3>{{thumbnail.myText}}</h3>-->
    <div>
        <app-events *ngFor="let event of eventService.getEvents()" [eventOb] = "event"></app-events>
        <!--<tr *ngFor="let event of events"><td>{{event.name}}</td></tr>-->
    </div>
    `
})

export class EventListComponent {
    
    constructor(private eventService: EventService) {}

    handleParentClick(event:any) {
        console.log('handleParentClick - ' + event);
    }
}