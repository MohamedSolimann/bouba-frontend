import { TestBed } from '@angular/core/testing';

import { UserBackendcallsService } from './user-backendcalls.service';

describe('UserBackendcallsService', () => {
  let service: UserBackendcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBackendcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
