import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from 'src/app/student/student.service';
import { SpeakerService } from 'src/app/speaker/speaker.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
})
export class EventEditComponent implements OnInit {

  constructor(public eveServ:EventService,public studServ:StudentService,public spServ:SpeakerService) { }

  event:Event=new Event("","",new Date(1/1/2030),"",[],[]);
  studentsIds:string[]=[

  ]
  speakersIds:string[]=[

  ]

  concatinated:string[]=[

  ]
  spId:string="";

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  Save(){
    this.eveServ.updateEvent(this.event).subscribe(a=>{
      alert("Editted successfully!")
    })
  }
  concat(){
    
  }

  ngOnInit(): void {
    this.studServ.getAllStudents().subscribe(a=>{
      for(var i=0;i<a.length;i++){
        this.event.studentsIds.push()
        this.studentsIds.push((a[i]._id.toString()));
      }
    })
    this.spServ.getAllSpeakers().subscribe(a=>{
      for(var i=0;i<a.length;i++){
        this.speakersIds.push(a[i]._id);
      }
    })

  }
}
