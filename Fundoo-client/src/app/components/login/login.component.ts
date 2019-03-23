import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroupDirective, NgForm, Validators  } from '@angular/forms';
import{Router}from '@angular/router'
import{ErrorStateMatcher}from'@angular/material/core';
 import { MatSnackBar } from '@angular/material';
import{HttpService} from "../../service/http/http.service"
 import{UserService} from "../../service/userservice/userservices.service"

import { from } from 'rxjs';
import { error } from 'util';

export class MyErrorStateMatcher implements  ErrorStateMatcher{
  isErrorState(control :FormControl |null,form:FormGroupDirective|NgForm|null):boolean{
    const isSubmitted=form&&form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched|| isSubmitted));

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response:any;
  constructor( private httpService: HttpService,private router:Router,public userService:UserService,private snackBar: MatSnackBar,) {}

  ngOnInit() {
  }

  hide = true;

  emailFormControl=new FormControl('',[Validators.required,Validators.email])
  password=new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  
  login(){
    try {
      if( this.emailFormControl.value == "" || this.password.value == "") throw "fields cannot be empty"
      var model={
        email:this.emailFormControl.value,
        password:this.password.value
      }
      console.log(model);
this.userService.login(model).subscribe(data =>{
  console.log(data);
  this.response=data;
  this.snackBar.open("Logged in successfully..!","ok",{duration:5000})
  this.router.navigate(['dashboard'])
},error=>{
  console.log('error',error);
  this.snackBar.open("Login failed..!","ok",{duration:5000})
  
})
     
     
    } catch (error) {
      console.log(error);
      
    }
  }
  register(){
    this.router.navigate(['register'])
  }
  forgotpassword(){
    this.router.navigate(['forgotpassword']);
  }
  matcher = new MyErrorStateMatcher();
}
