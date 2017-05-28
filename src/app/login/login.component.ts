import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService} from '../services/user.service';
import {StorageService} from '../services/storage.service';
import {AppComponent} from '../app.component';
import {Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // busy: Subscription;
  config = {};
  constructor(public http:UserService ,
   public storage:StorageService,public router :Router,
    @ViewChild(AppComponent) public app :AppComponent) {

   }

  
  ngOnInit() {
    
    
  }
  
  public LoginData ={};
  public success;
  public errormessage;
  public token ;
  public head;
  header = new Headers();
  //place the token in the header
createAuthorizationHeader(headers:Headers,value) {
    headers.append('Authorization',value ); 
     headers.append('Content-Type', 'application/json');
     return headers;
  }


  public loginUser(){
    this.success ='';
    this.errormessage = '';
   this.http.loginUser(this.LoginData).subscribe(data=>{
      this.token = 'Bearer{'+data.token+'}',
      this.head=this.createAuthorizationHeader(this.header,this.token);
      console.log(this.head);
      this.storage.setlocalStorage('token',this.token);
      this.LoginData = {};
      this.app.isLoggedin =true;
      this.http.getUser({"headers":this.head}).subscribe(data=>
      {this.app.userDetail = data.user,this.storage.setlocalStorage('user',data.user),this.app.isUser=true },error=>console.log(error))
      // this.config={'busy': this.busy, 'message': 'my loading message', 'backdrop': false, 'minDuration': 2000};
      this.success ="login successful",
      this.router.navigate(['/courses']);
      console.log(data.token)

    },error=>{
      console.log(error._body),
      this.errormessage = JSON.parse (error._body)
    });

  }


}
