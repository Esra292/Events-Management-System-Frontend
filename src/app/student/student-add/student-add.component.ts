import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  std:Student=new Student(1,"","");

  constructor(public stdServ:StudentService,public router:Router) { }

  Save(){
    this.stdServ.addStudent(this.std).subscribe(a=>{
      console.log(this.std)
      this.router.navigate(['/student']);
    })
  }

  ngOnInit(): void {
  }

}
