import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/speaker/speaker';
import { SpeakerService } from 'src/app/speaker/speaker.service';
import { StudentService } from 'src/app/student/student.service';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

events:Event[]=[

]
speakerIds =new Array(this.events.length)

newSpeakerId:String="";

speakersIds:String[]=[

]
studentsIds:String[]=[

]


AddSpeaker(j:number){
  this.events[j].otherSpeakersIds.push(this.speakerIds[j]);
  this.eveServ.updateEvent(this.events[j]).subscribe(a=>{

  });
}

AddStudent(j:number){
  this.events[j].studentsIds.push(this.studentsIds[j]);
  this.eveServ.updateEvent(this.events[j]).subscribe(a=>{
    
  })
}

Remove(y:number,j:number){
  console.log(y);
  let proceed = confirm("Are you sure you want to delete this speaker?");
  if(proceed){
    this.events[j].otherSpeakersIds.splice(y,1);
    this.speakerIds.splice(y,1);
    this.eveServ.updateEvent(this.events[j]).subscribe(a=>{
     console.log(a);
    })
  }
}
Remove1(y:number,j:number){
  let proceed = confirm("Are you sure you want to delete this student?");
  if(proceed){
    this.events[j].studentsIds.splice(y,1);
    this.studentsIds.splice(y,1);
    this.eveServ.updateEvent(this.events[j]).subscribe(a=>{
  
    })
  }
}

  constructor(public eveServ:EventService,public spkServ:SpeakerService,public stdServ:StudentService) { }

  ngOnInit(): void {
    this.eveServ.getEvents().subscribe(a=>{
      this.events=a;
      console.log(a);

    this.spkServ.getAllSpeakers().subscribe(a=>{
      for(var i=0;i<a.length;i++){
        this.speakersIds.push(a[i]._id);
      }
    })
    })
    this.stdServ.getAllStudents().subscribe(a=>{
      for(var i=0;i<a.length;i++){
        this.studentsIds.push(a[i]._id.toString())
      }
    })
  }

}
