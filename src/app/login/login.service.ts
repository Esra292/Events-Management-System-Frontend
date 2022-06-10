import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8080/login";
  
  constructor(public http:HttpClient) { }

  login(data: any):Observable<any>{
    console.log(data);
    localStorage.setItem("token",data.token);
    return this.http.post<any>(this.baseUrl,data);
  }
}
