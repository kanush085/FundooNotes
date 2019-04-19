import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';
import {HttpClientModule} from '@angular/common/http';
describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService],
      imports:[
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
