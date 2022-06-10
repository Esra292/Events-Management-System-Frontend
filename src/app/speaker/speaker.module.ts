import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { FormsModule } from '@angular/forms';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';

const routes: Routes = [
  {path:'speaker',component:SpeakerListComponent},
  {path:'speaker/add',component:SpeakerAddComponent},
  {path:'speaker/edit/:id',component:SpeakerEditComponent},
  {path:'speaker/details/:id',component:SpeakerDetailsComponent},
];



@NgModule({
  declarations: [
    SpeakerComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailsComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  exports:[
    SpeakerComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
  ],
})
export class SpeakerModule { }
