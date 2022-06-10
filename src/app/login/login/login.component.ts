import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User("","","");
  
  UserName="";
  Password="";

  constructor(public loginServ:LoginService,public ac:ActivatedRoute,public router:Router) { }

  logIn(){
    // this.ac.params.subscribe()
    this.loginServ.login(this.user).subscribe(a=>{
      console.log(a);
    if(a.message=="Student"){
      this.router.navigate(['/studentPage/'+a.user._id]);
    }
    if(a.message=="Speaker"){
      this.router.navigate(['/speakerPage/'+a.user._id])
    }
    if(a.message=="Admin"){
      this.router.navigate(['/adminPage']); 
    }
    },
    error=> console.log(error))
  }

  ngOnInit(): void {
  }

}
