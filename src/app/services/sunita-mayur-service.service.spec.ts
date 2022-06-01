import { TestBed } from '@angular/core/testing';

import { SunitaMayurServiceService } from './sunita-mayur-service.service';

describe('SunitaMayurServiceService', () => {
  let service: SunitaMayurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunitaMayurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
