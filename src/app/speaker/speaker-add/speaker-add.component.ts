import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {

  speaker:Speaker=new Speaker("","","","","","","");

  constructor(public speServ:SpeakerService,public router:Router) { }
  Save(){
    this.speServ.addSpeaker(this.speaker).subscribe(a=>{
      console.log(this.speaker);
      this.router.navigate(['/speaker'])
    })
  }

  ngOnInit(): void {
    
  }

}
