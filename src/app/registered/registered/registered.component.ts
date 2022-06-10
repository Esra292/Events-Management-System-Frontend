import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  constructor(public router:Router) { }

  login(){
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
  }

}
