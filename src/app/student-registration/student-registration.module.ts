import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import {RouterModule,Routes} from '@angular/router'
import { RegistrationComponent } from '../registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredModule } from '../registered/registered.module';
import { RegisteredComponent } from '../registered/registered/registered.component';
import { StudentPageComponent } from '../student-page/student-page/student-page.component';
import { LoginComponent } from '../login/login/login.component';

const routes:Routes=[
  {path:'spregister',component:RegistrationComponent},
  {path:'registered',component:RegisteredComponent},
  {path:'studentPage',component:StudentPageComponent},
  {path:'login',component:LoginComponent},
]

@NgModule({
  declarations: [
    StudentRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RegisteredModule,
  ],
})
export class StudentRegistrationModule { }
