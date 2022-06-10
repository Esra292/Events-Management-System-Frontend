import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';
import { StudentPageComponent } from '../student-page/student-page/student-page.component';
import { StudentModule } from '../student/student.module';
import { SpeakerPageComponent } from '../speaker-page/speaker-page/speaker-page.component';
import { SpeakerModule } from '../speaker/speaker.module';
import { AdminPageComponent } from '../admin-page/admin-page/admin-page.component';

const routes:Routes=[
  {path:'studentPage',component:StudentPageComponent},
  {path:'studentPage/:id',component:StudentPageComponent},
  {path:'speakerPage/:id',component:SpeakerPageComponent},
  {path:'adminPage',component:AdminPageComponent},
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StudentModule,
    SpeakerModule,

  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
