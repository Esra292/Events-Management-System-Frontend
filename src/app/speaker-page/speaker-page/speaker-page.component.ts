import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker/speaker.service';
import { EventService } from 'src/app/event/event.service';
import { Event } from 'src/app/event/event';

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.css']
})
export class SpeakerPageComponent implements OnInit {

  constructor(public spServ:SpeakerService,public ac:ActivatedRoute,public router:Router,public eveServ:EventService) { }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;

  eventsArr:Event[]=[

  ]

  eventsArr1:Event[]=[

  ]

  profile(){
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.spServ.getSpeakerById(a['id']).subscribe(b=>{
        this.router.navigate(['speaker/details/'+a['id']])
      }) 
    }) 
  }

  events(){
    console.log("events")
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.eveServ.getEvents().subscribe(b=>{
        this.eventsArr=b;
        console.log(this.eventsArr)
        for(var i=0;i<this.eventsArr.length;i++){
          for(var y=0;y<this.eventsArr[i].otherSpeakersIds.length;y++){
          if(this.eventsArr[i].otherSpeakersIds[y]==a['id']){
            this.eventsArr1.push(this.eventsArr[i]);
          }
        }
      }
      }) 
    }) 
  }

  ngOnInit(): void {
  }

}
