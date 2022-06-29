import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MKFormValidationComponent } from './mk-form-validation.component';

describe('MKFormValidationComponent', () => {
  let component: MKFormValidationComponent;
  let fixture: ComponentFixture<MKFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MKFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MKFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
