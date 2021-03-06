import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {EventService} from './event.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component ({
    template : `
        <h3>Edit Component {{event.name}}</h3>
        <form #newEventForm="ngForm" (ngSubmit)="saveEvent(eventForm.value)" novalidate>
            <div class="form-group">
            <label for="event-name">Event Name:</label>
            <input [(ngModel)]="event.name" name="name" id="name" type="text"/>
            </div>
            <div class="form-group">
            <label for="date">Date: </label>
            <input [(ngModel)]="event.date" name="date" id="date" type="text"/>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel(eventForm)">Cancel</button>
        </form>
        
    `
})

export class EditEventComponent implements OnInit {
    text:string = "my text"
    event:any;
    /*private name:FormControl;
    private date:FormControl;
    eventForm:FormGroup*/
    constructor(private eventService:EventService, private route:ActivatedRoute, private router:Router) {}
    
    getParam(paramId:string) {
        return this.route.snapshot.params[paramId];
    } 

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.getParam('id'))[0];
        /* this.name = new FormControl(this.event.name, [Validators.required, Validators.minLength(2)])
        this.date = new FormControl(this.event.date)
        this.eventForm = new FormGroup({
            name: this.name,
            date: this.date
        }) */

    }

    updateEvent(){
        console.log("updateEvent()")
    }

    cancel(){
        console.log("cancel()")
    }

    saveEvent(event) {
        console.log(event)
        this.eventService.updateEvent(this.event.id, event.name, event.date);
        this.router.navigate(['/events']); 
    }

}