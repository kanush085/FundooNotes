import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TakenoteComponent } from '../takenote/takenote.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { NoteComponent } from './note.component';
import {MatIconModule} from '@angular/material/icon';
import { IconlistComponent } from '../iconlist/iconlist.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent ,TakenoteComponent,DisplaynoteComponent,IconlistComponent,LoginComponent,RegisterComponent,
        ForgotpasswordComponent,ResetpasswordComponent,DashboardComponent,ArchiveComponent,TrashComponent,UpdatenoteComponent],
      imports:[
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatToolbarModule,
        MatTooltipModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatListModule,
        MatSidenavModule,
        MatDialogModule,
        
      ],
      providers:[
        ErrorStateMatcher,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
