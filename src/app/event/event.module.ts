import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { Route, RouterModule,Routes } from '@angular/router';
import { EventAddComponent } from './event-add/event-add.component';
import { FormsModule } from '@angular/forms';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpeakerModule } from '../speaker/speaker.module';

const routes:Route[]=[
  {path:'event',component:EventListComponent},
  {path:'event/add',component:EventAddComponent},
  {path:'event/details/:id',component:EventDetailsComponent},
  {path:'event/edit/:id',component:EventEditComponent},
]

@NgModule({
  declarations: [
    EventListComponent,
    EventAddComponent,
    EventEditComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SpeakerModule
  ]
})
export class EventModule { }
