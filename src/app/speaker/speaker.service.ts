import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

baseUrl="http://localhost:8080/Speaker/";


  getAllSpeakers(){
    return this.http.get<Speaker[]>(this.baseUrl);
  }

  addSpeaker(speaker:Speaker){
    return this.http.post<Speaker>(this.baseUrl,speaker);
  }

  getSpeakerById(id:number){
    return this.http.get<Speaker>(this.baseUrl+id);
  }

  updateSpeaker(spk:Speaker){
    return this.http.put<Speaker>(this.baseUrl,spk);
  }

  constructor(public http:HttpClient) { }
}
