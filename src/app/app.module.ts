import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BusyModule} from 'angular2-busy';
import { AppRoutingModule } from './app-routing.modules';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { ContactComponent } from './contact/contact.component';
import { ApiService } from './services/api.service';
import { UserService} from './services/user.service';
import { StorageService} from './services/storage.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    AddCommentComponent,
    CourseDetailComponent,
    CourseEditComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BusyModule
    // LocalStorageModule.withConfig({
    //         prefix: 'my-app',
    //         storageType: 'localStorage'
    //     })
  ],
  // exports:[BusyModule],
  providers: [ApiService,CoursesService,UserService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
