import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatInputModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        ErrorStateMatcher
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.firstname.setValue('');
    component.lastname.setValue('');
    component.emailFormControl.setValue('')
    component.password.setValue('');
    component.confirmpassword.setValue('');
    expect(component.firstname.valid).toBeFalsy()
    expect(component.lastname.valid).toBeFalsy()
    expect(component.emailFormControl.valid).toBeFalsy()
    expect(component.password.valid).toBeFalsy()
    expect(component.confirmpassword.valid).toBeFalsy()
  }))
  it('form should be vaild', async(() => {
    component.firstname.setValue('anush');
    component.lastname.setValue('kumar');
    component.emailFormControl.setValue('abcde@gmail.com')
    component.password.setValue('123456');
    component.confirmpassword.setValue('123456');
    expect(component.firstname.valid).toBeTruthy()
    expect(component.lastname.valid).toBeTruthy()
    expect(component.password.valid).toBeTruthy()
    expect(component.confirmpassword.valid).toBeTruthy()
  }));


});
