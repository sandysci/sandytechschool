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
  public id:number;
  public course;
  public baseurl = 'http://sandytech.sci.ng/api/v1/';
  public url = 'http://sandytech.sci.ng/';
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public http: CoursesService,
    public location:Location,
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
