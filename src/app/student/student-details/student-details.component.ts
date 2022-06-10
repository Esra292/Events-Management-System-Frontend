import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnDestroy{

std:Student=new Student(1,"","");

  constructor(public ac:ActivatedRoute,public stdServ:StudentService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  ngOnInit(): void {
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.stdServ.getStudentById(a['id']).subscribe(a=>{
        this.std=a;
      })
    })
  }

}
