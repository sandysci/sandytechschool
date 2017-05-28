import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'; 
import {StorageService} from '../services/storage.service';
import {Observable,Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
 

  constructor(public http:UserService,public storage:StorageService,public router:Router) { }
  public RegisterData = {'name':'','email':'','password':'','password_confirmation':''};
  public user ={};
  public success;
  public errormessage;
  //  message:string  ="message";

  //  public user:Array<any> ;


  ngOnInit() {
    this.storage.setlocalStorage('sandy','i am here');
    // console.log(this.storage.getlocalStorage('sandy'));
  }

  
  StoreUser(){
    this.success =''; 
    this.errormessage ='';
    this.user =this.RegisterData;  
    // return this.http.storeUser(this.user).subscribe( data => console.log(data));
    this.http.storeUser(this.user).subscribe( data =>
    {console.log(data),
     this.RegisterData ={'name':'','email':'','password':'','password_confirmation':''} ,
     this.success ="Registration Succesfully,you can login in now",
     this.router.navigate(['/login']);
    },
    error =>
    { this.errormessage = JSON.parse(error._body),console.log(JSON.parse(error._body).message)});
     
    

  }
  
  
}
