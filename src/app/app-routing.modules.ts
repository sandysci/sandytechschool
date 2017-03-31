import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { CoursesComponent }      from './courses/courses.component';
import { ContactComponent }      from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home',  component: HomeComponent },
  { path: 'courses',  component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
