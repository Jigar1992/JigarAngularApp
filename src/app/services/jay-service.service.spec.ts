import { TestBed } from '@angular/core/testing';

import { JayServiceService } from './jay-service.service';

describe('JayServiceService', () => {
  let service: JayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
