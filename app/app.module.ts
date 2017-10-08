import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
