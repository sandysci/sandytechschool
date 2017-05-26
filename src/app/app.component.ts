import { Component } from '@angular/core';
import {StorageService} from './services/storage.service';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storage:StorageService,private user:UserService ,private router:Router){

  }
  
  isLoggedin =this.user.isLoggedin() ;
  isUser =this.user.isUser() ;
  userDetail = this.storage.getlocalStorage('user'); 

  Logout(){ 
    //  console.log("logout");
    this.user.Logout();
    this.isLoggedin = false;
    this.isUser =false;
    this.router.navigate(['/home']);
  }

}
