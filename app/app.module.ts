import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {EventService} from './events/event.service'

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events/events.component';
import {EventListComponent} from './events/event-list.component';
/* import {EventEditComponent} from './events/edit-event.component'; */
import {ViewEventComponent} from './events/view-event.component'
import {appRoutes} from './routes'



@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventListComponent ,
    ViewEventComponent
    /* ,EventEditComponent  */
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
