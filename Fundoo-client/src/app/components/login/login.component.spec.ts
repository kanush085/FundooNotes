import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { from } from 'rxjs';
import { by } from 'protractor';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // fixture.detectChanges();
  let de: DebugElement;
  let el: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers:[
        ErrorStateMatcher
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invaild',async(()=>{
component.emailFormControl.setValue('')
component.password.setValue('')
expect(component.emailFormControl.valid).toBeFalsy();
expect(component.password.valid).toBeFalsy();

  }));
  it('form should be vaild',async(()=>{
    component.emailFormControl.setValue('abcde@gmail.com');
    component.password.setValue('123456');
    expect(component.emailFormControl.valid).toBeTruthy()
    expect(component.password.valid).toBeTruthy()
  }))
  
  // it('it should call login method',async(()=>{
  //   fixture.detectChanges();
  //   spyOn(component,'login');
  //   el=fixture.debugElement.query(By.css('button')).nativeElement;
  // }))

});
