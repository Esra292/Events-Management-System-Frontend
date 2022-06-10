import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(public stdServ:StudentService,public router:Router,public ac:ActivatedRoute) { }
 
  std:Student=new Student(1,"","");

  Save(){
    this.ac.params.subscribe(a=>{
      this.std._id=parseInt(a['id']);
      console.log(this.std)
      this.stdServ.updateStudent(this.std).subscribe(a=>{
      this.router.navigate(['/student']);
    })
  })
}
   
  ngOnInit(): void {
  }
}
