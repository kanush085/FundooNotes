import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from "../../app-routing.module";
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[LoginComponent,RegisterComponent,ForgotpasswordComponent,
        ResetpasswordComponent,DashboardComponent,NoteComponent,ArchiveComponent,TrashComponent,UpdatenoteComponent],
      providers: [AuthGuard],
      imports:[RouterTestingModule,AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    });
  });

  // it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
  //   expect(guard).toBeTruthy();
  // }));
});
