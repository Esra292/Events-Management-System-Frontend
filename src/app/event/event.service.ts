import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

baseUrl="http://localhost:8080/Event/";


getEvents(){
  return this.http.get<Event[]>(this.baseUrl)
}

addEvent(event:Event){
  return this.http.post<Event>(this.baseUrl,event);
}

getEventById(id:number){
  return this.http.get<Event>(this.baseUrl+id);
}

updateEvent(event:Event){
  return this.http.put<Event>(this.baseUrl,event);
}

  constructor(public http:HttpClient) { }
}
