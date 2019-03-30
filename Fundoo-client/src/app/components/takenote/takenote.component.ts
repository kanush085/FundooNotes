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
  bgcolor: any = "#FFFFFF";
  reqbody:any
  constructor( private httpService: HttpService,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  noteTitle = new FormControl("", [Validators.required, Validators.required]);
  noteContent = new FormControl("", [Validators.required, Validators.required]);
  addNote(){

    console.log("------------------------------",localStorage.getItem('token'));
    this.flag = !this.flag;
      if(this.noteTitle ||this.noteContent)
  {
    this.reqbody={

    
    }
  }

  }
  
  reverseFlag() {
    console.log('reverse flag');
    
    this.flag = !this.flag;
  }
}
