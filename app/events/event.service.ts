import {Injectable} from '@angular/core'


@Injectable()
export class EventService {
    getEvents() {
       return EVENTS;
    }

    getEvent(id:number):any {
        
        let result =  EVENTS.filter(function(node) {
            return node.id==id;
        });
        console.log("ES : getEvent : " + id + ' result: '+ JSON.stringify(result));
        return result;
    }

    updateEvent(id:number, name:string, date:string) {
        let event = this.getEvent(id)
        event.name = name
        event.date = date
        console.log('Event updated : id : '+ id + ', event : ' + JSON.stringify(event))
        EVENTS[id]=event
        
    }
}

const EVENTS = [{
    id: 1,
    name: 'Lakhwinder\'s Birthday',
    date: '11/13/1986'
},
{
    id: 2,
    name: 'Rajwinder\'s Birthday',
    date: '05/21/1990'
}]