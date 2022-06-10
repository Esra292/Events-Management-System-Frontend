import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerPageComponent } from './speaker-page/speaker-page.component';
import { RouterModule,Routes } from '@angular/router';
import { EventModule } from '../event/event.module';
import { SpeakerModule } from '../speaker/speaker.module';

const routes:Routes=[
  { path:'speakerPage/:id',component:SpeakerPageComponent}
]

@NgModule({
  declarations: [
    SpeakerPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EventModule,
    SpeakerModule,
  ]
})
export class SpeakerPageModule { }
