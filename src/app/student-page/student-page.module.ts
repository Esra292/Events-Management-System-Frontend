import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { RouterModule,Routes } from '@angular/router';
import { EventModule } from '../event/event.module';
import { EventDetailsComponent } from '../event/event-details/event-details.component';

const routes:Routes=[
  {path:'studentPage/:id',component:StudentPageComponent},
  {path:'event/details/:id',component:EventDetailsComponent}
]

@NgModule({
  declarations: [
    StudentPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EventModule,
  ]
})
export class StudentPageModule { }
