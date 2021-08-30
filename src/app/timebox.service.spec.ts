import { TestBed } from '@angular/core/testing';

import { TimeboxService } from './timebox.service';

describe('TimeboxService', () => {
  let service: TimeboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
