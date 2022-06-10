import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerRegistrationComponent } from './speaker-registration/speaker-registration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpeakerRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SpeakerRegistrationModule { }
