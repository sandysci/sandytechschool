import { Injectable } from '@angular/core';
import { ApiService} from './api.service';
import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
public baseurl = 'http://sandytech.sci.ng/api/v1/';
 public url = 'http://sandytech.sci.ng/';
//  public baseurl = environment.baseUrl;
 public userurl ='user';
 public authenticateurl = 'authenticate'; 

  constructor(public http: ApiService,public storage:StorageService) {
    
   }
   public getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

  public handleError(error:Response){
    return Observable.throw(error.json() ||"server error");
   }

   storeUser(data){
    return  this.http.postUrl(`${this.baseurl}${this.userurl}`,data).map(data=>data.json()).do(data=>{
       console.log(data)});
   }
    loginUser(data){
    return  this.http.postUrl(`${this.baseurl}${this.authenticateurl}`,data).map(data=>data.json()).do(data=>{
       console.log(data)});
   }
   getUser(headers){
    return  this.http.getUrlwithHeader(`${this.baseurl}${this.userurl}`,headers).map(data=>data.json()).do(data=>{
       console.log(data)});
   }

   
   isLoggedin(){
       return this.storage.getlocalStorage('token') !== null ? true : false; 
   }
   isUser(){
       return this.storage.getlocalStorage('user') !== null ? true : false; 
   }
   Logout(){
       this.storage.removelocalStorage('token');
       this.storage.removelocalStorage('user');
   }
   
   
}
