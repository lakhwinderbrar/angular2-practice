import {Component} from '@angular/core'

@Component({
    selector: "event-list",
    template: `
    <button (click)="thumbnail.handleClick()">Click me(parent)</button>
    <table>
        <app-events #thumbnail [eventOb] = "eventOb1" (eventClick)="handleParentClick($event)"></app-events>
    </table>
    `
})

export class EventListComponent {
    eventOb1 = {
        name : 'Event 1'
    }

    handleParentClick(event:any) {
        console.log('handleParentClick - ' + event);
    }
}