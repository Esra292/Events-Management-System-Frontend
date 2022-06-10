import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

event:Event=new Event("","",new Date(1/1/2001),"",[],[]);

Save(): void{
  let str=this.event.otherSpeakersIds.toString();
  let str2=str.split(",");
  this.event.otherSpeakersIds=str2;

  let nums=this.event.studentsIds.toString();
  let nums2=nums.split(",");
  this.event.studentsIds=nums2;

  this.eveServ.addEvent(this.event).subscribe(a=>{ 
    console.log(a.otherSpeakersIds);
    this.router.navigate(['/event'])
  })
}
  constructor(public eveServ:EventService,public router:Router) { 

  }

  ngOnInit(): void {
  }

}
