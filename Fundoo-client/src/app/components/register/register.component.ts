import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { FormControl,FormGroupDirective, NgForm, Validators  } from '@angular/forms';
import{ErrorStateMatcher}from'@angular/material/core';

export class MyErrorStateMatcher implements  ErrorStateMatcher{
  isErrorState(control :FormControl |null,form:FormGroupDirective|NgForm|null):boolean{
    const isSubmitted=form&&form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched|| isSubmitted));

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  firstname=new FormControl('',[Validators.required])
  lastname=new FormControl('',[Validators.required])
  emailFormControl=new FormControl('',[Validators.required,Validators.email]);
   password=new FormControl('',[Validators.required])
   confirmpass=new FormControl('',[Validators.required])

  login(){
    try {
      if(this.emailFormControl.value==''||this.firstname.value==''||this.lastname.value==''){
    throw "fields cannot be empty..!"
      }
      this.router.navigate(['login'])
    } catch (error) {
      console.log(error);
      
    }
  }
  matcher = new MyErrorStateMatcher();
}
