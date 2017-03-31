import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {CoursesService} from '../courses/courses.service';
import {Course} from '../courses/courses';
import {Observable} from 'rxjs/Observable';
import { Location } from '@angular/common';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
@Component({
  // moduleId: module.id,
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  private id:number;
  private course;
  private url = environment.url;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: CoursesService,
    private location:Location,
  ) { }

getCourse(){
  this.id = this.route.snapshot.params['id'];
  this.course = this.http.getCoursedetail(this.id).subscribe(res =>
  {this.course = res;
  console.log(this.course)});
}

goback(){
  // console.log("am here");
  this.location.back();
}

ngOnInit() {
  this.getCourse ();

  }

}
