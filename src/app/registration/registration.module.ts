import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { StudentModule } from '../student/student.module';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router'
import { StudentRegistrationComponent } from '../student-registration/student-registration/student-registration.component';
import { SpeakerRegistrationComponent } from '../speaker-registration/speaker-registration/speaker-registration.component';

const routes:Routes=[
  {path:'stregister',component:StudentRegistrationComponent},
  {path:'spregister',component:SpeakerRegistrationComponent}
]


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RegistrationComponent,
  ]
})
export class RegistrationModule { }
