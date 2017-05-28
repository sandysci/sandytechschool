import { Component, OnInit ,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import {CoursesService} from '../courses/courses.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

@ViewChild('myInput') myInputVariable;
 @Input() getedit;
 @Output() editComment = new EventEmitter();

 
constructor(public http :CoursesService) {
    }

  ngOnInit() {
  
  }
  onChangeFile($event) : void {
  this.readThis($event.target);
  }

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.getedit.picture_url = myReader.result;
    console.log(this.getedit.picture_url);
  }
  myReader.readAsDataURL(file);
}


  StoreCourseEdit(){
    console.log(this.getedit);
    this.editComment.emit(this.getedit);
    this.getedit ={ };
    // if(this.myInputVariable.nativeElement.value ==''){
    //    this.myInputVariable.nativeElement.value ='';
    // }
    
  }

}
