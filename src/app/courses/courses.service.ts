import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Course} from './courses';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class CoursesService {

  public url = 'courses';
  public url2 = 'course';
  public slash = '\\';
 public baseUrl = 'http://sandytech.sci.ng/api/v1/';
//  public url = 'http://sandytech.sci.ng/';

  constructor(public api:ApiService) { }
  public handleServerError(error: Response) {
        return Observable.throw(error.json() || 'Server error'); // Observable.throw() is undefined at runtime using Webpack
    }


  getCourse(){

    return this.api.getUrl(`${this.baseUrl}${this.url}`).map(res=>res.json()).do(res=>console.log(res)).catch(this.handleServerError);    
  }

   postCourse(data){
    return this.api.postUrl(`${this.baseUrl}${this.url2}`,data).map(res=>res.json()).do(res=>console.log(res)).catch(this.handleServerError);
    
  }
  editCourse(data,id){
    return this.api.editUrl(`${this.baseUrl}${this.url2}${this.slash}${id}`,data).map(res=>res.json()).do(res=>console.log(res)).catch(this.handleServerError);
    
  }
  deleteCourse(id){
    return this.api.deleteUrl(`${this.baseUrl}${this.url2}${this.slash}${id}`).map(res=>res.json()).do(res=>console.log(res)).catch(this.handleServerError);
    
  }
  // getCoursedetail(id:number){
  //  return  this.getCourse().subscribe(res =>res.courses.find(res=>res.courses.id === id));
  // }
  getCoursedetail(id:number){
   return this.getCourse().map(courses=>courses.courses.find(course => course.id == id));

  }
   
}
