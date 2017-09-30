import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events/events.component';
import {EventListComponent} from './events/event-list.component'



@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
