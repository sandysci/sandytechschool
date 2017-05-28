import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Course} from './courses/courses';

@Injectable()
export class ApiService {

  constructor(public http:Http) {

   }
   getUrl(url):Observable<any>{
     return this.http.get(url);
   }
   postUrl(url,data):Observable<any>{
     return this.http.post(url,data);
   }
   editUrl(url,data):Observable<any>{
     return this.http.put(url,data);
   }
   deleteUrl(url):Observable<any>{
     return this.http.delete(url);
   }

}
