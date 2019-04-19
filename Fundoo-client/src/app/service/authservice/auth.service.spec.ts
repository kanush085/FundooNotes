import { TestBed, inject } from '@angular/core/testing';
import { AppRoutingModule } from "../../app-routing.module";

import { AuthService } from './auth.service';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { ForgotpasswordComponent } from '../../components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../../components/resetpassword/resetpassword.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NoteComponent } from '../../components/note/note.component';
import { ArchiveComponent } from '../../components/archive/archive.component';
import { TrashComponent } from '../../components/trash/trash.component';
import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[LoginComponent,RegisterComponent,ForgotpasswordComponent,ResetpasswordComponent,DashboardComponent,
        NoteComponent,ArchiveComponent,TrashComponent,UpdatenoteComponent],
      providers: [AuthService, ErrorStateMatcher ],
      imports:[
        AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
  });

  // it('should be created', inject([AuthService], (service: AuthService) => {
  //   expect(service).toBeTruthy();
  // }));
});
