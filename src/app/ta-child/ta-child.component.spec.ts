import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAChildComponent } from './ta-child.component';

describe('TAChildComponent', () => {
  let component: TAChildComponent;
  let fixture: ComponentFixture<TAChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
