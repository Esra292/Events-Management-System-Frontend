import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration/registration.service';
import { Student } from 'src/app/student/student';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  std:Student=new Student(1,"","");

  constructor(public regSrev:RegistrationService,public router:Router) { }

  Register(){
    console.log(this.std._id)
    this.regSrev.stRegister(this.std).subscribe(a=>{
    this.router.navigate(['/registered'])  
      console.log("/login");
    });
  }

  ngOnInit(): void {
  }

}
