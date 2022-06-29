import { TestBed } from '@angular/core/testing';

import { KMDemoServiceService } from './km-demo-service.service';

describe('KMDemoServiceService', () => {
  let service: KMDemoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KMDemoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
