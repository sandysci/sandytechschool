import { Component, OnInit,Output,EventEmitter,ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})


export class AddCommentComponent implements OnInit {
  
@ViewChild('myInput') myInputVariable;

 

  CourseData = {'name':'','code':'','description':''};

  @Output() newComment = new EventEmitter();
 
   

  onChangeFile($event) : void {
  this.readThis($event.target);
  }

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
     this.CourseData['picture_url'] = myReader.result;
    console.log(this.CourseData);
  }
  myReader.readAsDataURL(file);
}
  StoreCourse(){
    // alert(this.CourseData)
     this.newComment.emit(this.CourseData);
      this.CourseData['picture_url'] = '';
     this.myInputVariable.nativeElement.value ='';
    // this.myInputVariable.nativeElement.reset();
      console.log(this.CourseData);
  }


  ngOnInit() {
  }

}
