import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTDemoComponent } from './mtdemo.component';

describe('MTDemoComponent', () => {
  let component: MTDemoComponent;
  let fixture: ComponentFixture<MTDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
