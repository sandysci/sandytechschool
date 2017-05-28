import { Component, OnInit,Output,EventEmitter,ElementRef,ViewChild,Renderer} from '@angular/core';
import { CoursesService } from './courses.service';
import { Router } from '@angular/router';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import {environment} from '../../environments/environment';
import {StorageService} from '../services/storage.service';
import {Observable} from 'rxjs';
import {Course} from './courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @ViewChild('editform') editformvariable : ElementRef;
 
  public showeditcourse :boolean = true; 
  public courses:Array<any> ;
  public errorMessage;
  
  public geteditcourse;

  @Output() course_s =new EventEmitter();
  public url = environment.url;
  constructor(public http:CoursesService,public _router:Router,public _renderer:Renderer,public storage:StorageService) { }

  getCourse(){
    return this.http.getCourse().subscribe(res => {
        this.courses = res.courses;
      });
  }
  handleNewCourse(course){
     return this.http.postCourse(course).subscribe(res => {
        this.courses.unshift(res.course);
      });
  }
  handleEditCourse(course){
     console.log(course);
    return this.http.editCourse(course,course.id).subscribe(res=>{
    this.courses = res.courses;
  });
  }
  deleteCourse(id){
    return this.http.deleteCourse(id).subscribe(res=>{
      this.courses = res.courses;
    })
  }
  editCourse(course){
   this.showeditcourse =false; 
   this.course_s.emit(course);
   this.geteditcourse = course;
   this._renderer.invokeElementMethod(this.editformvariable.nativeElement, 'focus', []);
  //  console.log( this.showeditcourse);
  //  console.log(this.course_s);
    // return this.http.editCourse(course,id).subscribe(res => {
    //      this.courses = res.courses;
    //   });

  }
  viewDetail(course){
    this._router.navigate(['/course',course.id]);

  }
  courseDetail(course){
    console.log(course)
   this.course_s.emit(course);

  }
  
  ngOnInit() {
     this.getCourse();

    //  console.log(this.storage.getlocalStorage('sandy'));
  }

}
