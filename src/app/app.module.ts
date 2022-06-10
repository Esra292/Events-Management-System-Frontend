import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SpeakerModule } from './speaker/speaker.module';
import { StudentModule } from './student/student.module';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { EventModule } from './event/event.module';
import { RegistrationModule } from './registration/registration.module';
import { StudentRegistrationModule } from './student-registration/student-registration.module';
import { SpeakerRegistrationModule } from './speaker-registration/speaker-registration.module';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { StudentPageModule } from './student-page/student-page.module';
import { SpeakerPageModule } from './speaker-page/speaker-page.module';
import { AdminPageModule } from './admin-page/admin-page.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    SpeakerModule,
    StudentModule,
    HttpClientModule,
    CommonModule,
    ComponentsModule,
    EventModule,
    RegistrationModule,
    StudentRegistrationModule,
    SpeakerRegistrationModule,
    HomePageModule,
    StudentPageModule,
    SpeakerPageModule,
    AdminPageModule,
    // NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
