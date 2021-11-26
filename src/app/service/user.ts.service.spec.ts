import { TestBed } from '@angular/core/testing';

import { User.TsService } from './user.ts.service';

describe('User.TsService', () => {
  let service: User.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
