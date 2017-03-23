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

 
constructor(private http :CoursesService) {
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
    this.editComment.emit(this.getedit);
    console.log(this.getedit);
    this.myInputVariable.nativeElement.value ='';
    this.getedit ={ };
    // this.http.editCourse(this.getedit,this.getedit.id).subscribe(res=>{
    //   res.json()});
  

  }

}
