import {Routes} from '@angular/router'
/* import {EventEditComponent} from './events/edit-event.component' */
import {EventListComponent} from './events/event-list.component'
import {ViewEventComponent} from './events/view-event.component'

export const appRoutes : Routes = [
    { path: 'events', component: EventListComponent},
    { path: 'events/:id', component: ViewEventComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]