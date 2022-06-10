import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

basrUrl="http://localhost:8080/Student/";


constructor(public http:HttpClient) { }

getAllStudents(){
  return this.http.get<Student[]>(this.basrUrl);
}

addStudent(std:Student){
  return this.http.post<Student>(this.basrUrl,std);
}

getStudentById(id:number){
  return this.http.get<Student>(this.basrUrl+id);
}

updateStudent(std:Student){
  return this.http.put<Student>(this.basrUrl,std);
}

deleteStudent(id:number){
  return this.http.delete(this.basrUrl+id);
}

}
