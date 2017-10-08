import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'


@Component ({
    template : `
        <h4>View component {{this.getParam('id')}} </h4>
    `
})

export class ViewEventComponent {

    constructor(private route:ActivatedRoute) {}

    getParam(paramId:string) {
        return this.route.snapshot.params[paramId];
    } 

}