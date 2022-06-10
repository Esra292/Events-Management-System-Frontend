import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from '../speaker/speaker';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }

url="http://localhost:8080/register/";


  stRegister(std:Student){
      return this.http.post<Student>(this.url+"student",std);
  }
  spRegister(spk:Speaker){
    return this.http.post<Speaker>(this.url+"speaker",spk);    
  }
}
