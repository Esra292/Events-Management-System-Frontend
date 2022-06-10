import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {

  constructor(public spServ:SpeakerService,public ac:ActivatedRoute,public router:Router) { }

  speaker:Speaker=new Speaker("","","","","","","");

  Save(){
    this.ac.params.subscribe(a=>{
      this.speaker._id=(a['id']);
      console.log(this.speaker)
      this.spServ.updateSpeaker(this.speaker).subscribe(a=>{
      this.router.navigate(['/speaker']);
    })
    })
  }
  ngOnInit(): void {
  }

}
