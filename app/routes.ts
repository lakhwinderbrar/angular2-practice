import {Routes} from '@angular/router'
import {EventEditComponent} from './events/edit-event.component'
import {EventListComponent} from './events/event-list.component'

export const appRoutes : Routes = [
    { path: 'events', component: EventListComponent},
    /* { path: 'events/edit', component: EventEditComponent }, */
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]