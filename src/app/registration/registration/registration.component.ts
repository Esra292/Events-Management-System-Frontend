import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from 'src/app/speaker/speaker';
import { Student } from 'src/app/student/student';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public router:Router) { }

  role="";

  Ok(){
    console.log(this.role);
    if(this.role=="Student"){
      this.router.navigate(['stregister']); 
    }
    else{
      this.router.navigate(['spregister']); 
    }
  }

  ngOnInit(): void {
    
  }

}
