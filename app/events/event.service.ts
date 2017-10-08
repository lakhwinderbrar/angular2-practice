import {Injectable} from '@angular/core'


@Injectable()
export class EventService {
    getEvents() {
       return EVENTS;
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