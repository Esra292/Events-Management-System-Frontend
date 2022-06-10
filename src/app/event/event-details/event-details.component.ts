import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:Event=new Event("","",new Date(1/1/2001),"",[],[])

  constructor(public ac:ActivatedRoute,public spServ:EventService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  ngOnInit(): void {
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.spServ.getEventById(a['id']).subscribe(a=>{
        this.event=a;
      })
    })
  }

}
