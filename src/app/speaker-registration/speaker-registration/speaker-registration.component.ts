import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration/registration.service';
import { Speaker } from 'src/app/speaker/speaker';

@Component({
  selector: 'app-speaker-registration',
  templateUrl: './speaker-registration.component.html',
  styleUrls: ['./speaker-registration.component.css']
})
export class SpeakerRegistrationComponent implements OnInit {

  constructor(public regService:RegistrationService,public router:Router) { }

  speaker:Speaker=new Speaker("","","","","","","");

  Register(){
    this.regService.spRegister(this.speaker).subscribe(a=>{
      this.router.navigate(['/registered']);
    })
  }

  ngOnInit(): void {
  }

}
