import { TestBed } from '@angular/core/testing';

import { CopaServiceService } from './copa-service.service';

describe('CopaServiceService', () => {
  let service: CopaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
