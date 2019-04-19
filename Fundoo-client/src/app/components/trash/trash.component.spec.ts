import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { TrashComponent } from './trash.component';
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
import {MatDialogModule} from '@angular/material/dialog';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashComponent,DisplaynoteComponent,IconlistComponent ],
      imports:[
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatTooltipModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
