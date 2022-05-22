import { TestBed } from '@angular/core/testing';

import { CanAuthServiceService } from './can-auth-service.service';

describe('CanAuthServiceService', () => {
  let service: CanAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
