import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip'
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NoteComponent } from '../../components/note/note.component'
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { TakenoteComponent } from '../takenote/takenote.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { IconlistComponent } from '../iconlist/iconlist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';

import {APP_BASE_HREF} from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,LoginComponent,RegisterComponent,IconlistComponent,TakenoteComponent,DisplaynoteComponent,ForgotpasswordComponent,ResetpasswordComponent,NoteComponent,ArchiveComponent
      ,TrashComponent,UpdatenoteComponent ],
      imports:[
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatTooltipModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
        
      ],
      providers:[
        ErrorStateMatcher, {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
