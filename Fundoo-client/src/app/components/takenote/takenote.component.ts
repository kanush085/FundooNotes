import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http/http.service";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  flag = true;
  reqbody:any
  constructor( private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  noteTitle = new FormControl("", [Validators.required, Validators.required]);
  noteContent = new FormControl("", [Validators.required, Validators.required]);
  addNote(){ 
    this.flag = !this.flag;
      if((this.noteTitle.value==null || this.noteTitle.value=='' )&&(this.noteContent.value==null ||this.noteContent.value==''))
  {
    return
  }
    else{
    this.reqbody={
      userId:localStorage.getItem('userid'),
      title:this.noteTitle.value,
      description:this.noteContent.value
    
    };
    this.httpService.postJSON("createNote", this.reqbody).subscribe(data => {
      console.log(data);    
      this.noteTitle.reset()
      this.noteContent.reset() 
    }),
      err => {
        console.log(err);
      };
  }

  }
  
  reverseFlag() {     
    this.flag = !this.flag;
  }
}
