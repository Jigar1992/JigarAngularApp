import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentJayComponentComponent } from './parent-jay-component.component';

describe('ParentJayComponentComponent', () => {
  let component: ParentJayComponentComponent;
  let fixture: ComponentFixture<ParentJayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentJayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentJayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
