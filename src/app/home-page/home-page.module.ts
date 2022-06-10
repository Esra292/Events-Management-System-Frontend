import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { LoginComponent } from '../login/login/login.component';

const routes:Routes=[
  {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
