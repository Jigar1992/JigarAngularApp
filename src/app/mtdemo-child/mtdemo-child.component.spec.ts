import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTDemoChildComponent } from './mtdemo-child.component';

describe('MTDemoChildComponent', () => {
  let component: MTDemoChildComponent;
  let fixture: ComponentFixture<MTDemoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTDemoChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
