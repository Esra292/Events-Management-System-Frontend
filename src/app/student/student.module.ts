import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from './student-add/student-add.component';
import { RouterModule,Routes} from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component'

const routes:Routes=[
  {path:'student',component:StudentListComponent},
  {path:'student/add',component:StudentAddComponent},
  {path:'student/details/:id',component:StudentDetailsComponent},
  {path:'student/edit/:id',component:StudentEditComponent},
]


@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    StudentListComponent,
  ],
})
export class StudentModule { }
