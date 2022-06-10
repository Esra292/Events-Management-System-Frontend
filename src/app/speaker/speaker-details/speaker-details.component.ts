import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})

export class SpeakerDetailsComponent implements OnInit {

  speaker:Speaker=new Speaker("","","","","","","")

  constructor(public ac:ActivatedRoute,public spServ:SpeakerService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  ngOnInit(): void {
    this.sub=this.ac.params.subscribe(a=>{
      this.sub1=this.spServ.getSpeakerById(a['id']).subscribe(a=>{
        this.speaker=a;
      })
    })
  }
}
