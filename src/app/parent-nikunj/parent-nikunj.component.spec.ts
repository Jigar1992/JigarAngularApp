import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNikunjComponent } from './parent-nikunj.component';

describe('ParentNikunjComponent', () => {
  let component: ParentNikunjComponent;
  let fixture: ComponentFixture<ParentNikunjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNikunjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNikunjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
