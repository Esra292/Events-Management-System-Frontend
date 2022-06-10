import { Component, OnChanges, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit,OnChanges {

  constructor(public stdserv:StudentService) { }

  students:Student[]=[

  ];
  
  Click(){
    console.log("Students");
  }
  Remove(y:number,i:number){
    let proceed = confirm("Are you sure you want to delete this student?");
    if(proceed){
      console.log(y);
      this.students.splice(i,1);
      this.stdserv.deleteStudent(y);
    }
  }

  ngOnInit(): void {
    this.stdserv.getAllStudents().subscribe(a=>{
      this.students=a;
      console.log(this.students);
    });
  }
  ngOnChanges(){
    this.stdserv.getAllStudents().subscribe(a=>{
      this.students=a;
      console.log(this.students);
    });
  }

}
