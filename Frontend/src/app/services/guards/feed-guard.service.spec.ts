import { TestBed } from '@angular/core/testing';

import { FeedGuardService } from './feed-guard.service';

describe('FeedGuardService', () => {
  let service: FeedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
