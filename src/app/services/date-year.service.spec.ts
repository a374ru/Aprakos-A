import { TestBed } from '@angular/core/testing';

import { DateYearService } from './date-year.service';

describe('DateYearService', () => {
  let service: DateYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
