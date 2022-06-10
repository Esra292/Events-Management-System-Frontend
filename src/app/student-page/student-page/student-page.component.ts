import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/event/event';
import { EventService } from 'src/app/event/event.service';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit,OnDestroy {

  constructor(public stdServ:StudentService,public ac:ActivatedRoute,public router:Router,public eveServ:EventService) { }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;

  eventsArr:Event[]=[

  ]

  eventsArr1:Event[]=[

  ]

  profile(){
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.stdServ.getStudentById(a['id']).subscribe(b=>{
        this.router.navigate(['student/details/'+a['id']])
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
          for(var y=0;y<this.eventsArr[i].studentsIds.length;y++){
          if(this.eventsArr[i].studentsIds[y]==a['id']){
            this.eventsArr1.push(this.eventsArr[i]);
          }
        }
      }
      }) 
    }) 
  }


  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }
}
