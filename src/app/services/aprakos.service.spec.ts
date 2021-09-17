import { TestBed } from '@angular/core/testing';

import { AprakosService } from './aprakos.service';

describe('AprakosService', () => {
  let service: AprakosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprakosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
