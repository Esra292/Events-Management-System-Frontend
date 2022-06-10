import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteredComponent } from './registered/registered.component';
import {RouterModule,Routes} from '@angular/router'

const routes:Routes=[
  {path:'registered',component:RegisteredComponent}
]

@NgModule({
  declarations: [
    RegisteredComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RegisteredComponent,
  ]
})
export class RegisteredModule { }
