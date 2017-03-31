import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http:Http) {

   }
   getUrl(url):Observable<any>{
     return this.http.get(url);
   }
   getUrlwithHeader(url,header):Observable<any>{
     return this.http.get(url,header);
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
