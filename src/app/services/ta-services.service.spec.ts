import { TestBed } from '@angular/core/testing';

import { TAServicesService } from './ta-services.service';

describe('TAServicesService', () => {
  let service: TAServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TAServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
