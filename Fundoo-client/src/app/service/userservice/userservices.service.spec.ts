import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './userservices.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
