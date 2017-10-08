import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component ({
    template : `
        <div>View component {{this.getParam('id')}} </div>
    `
})

export class ViewEventComponent {

    constructor(private route:ActivatedRoute) {}

    getParam(paramId:string) {
        return this.route.snapshot.params[paramId];
    } 

}