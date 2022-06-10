import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'adminPage',component:AdminPageComponent}
]

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminPageModule { }
