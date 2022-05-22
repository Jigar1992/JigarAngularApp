import { TestBed } from '@angular/core/testing';

import { StrutiDemoService } from './struti-demo.service';

describe('StrutiDemoService', () => {
  let service: StrutiDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrutiDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
