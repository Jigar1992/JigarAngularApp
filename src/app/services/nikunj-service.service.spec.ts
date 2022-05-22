import { TestBed } from '@angular/core/testing';

import { NIkunjServiceService } from './nikunj-service.service';

describe('NIkunjServiceService', () => {
  let service: NIkunjServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NIkunjServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
