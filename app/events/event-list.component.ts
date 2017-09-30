import {Component} from '@angular/core'

@Component({
    selector: "event-list",
    template: `
    <table>
        <app-events [eventOb] = "eventOb1" (eventClick)="handleParentClick($event)"></app-events>
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