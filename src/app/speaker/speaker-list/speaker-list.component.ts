import { Component, OnInit } from '@angular/core';
import { Speaker } from '../speaker';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

speakers:Speaker[]=[];

resultArray = Object.keys(this.speakers).map(index => {
  let person = this.speakers[5];
  return person;
});

  constructor(public speServ:SpeakerService) { }

  ngOnInit(): void {
    this.speServ.getAllSpeakers().subscribe(a=>{
      this.speakers=a;
      console.log(a);
    })
  }

}
