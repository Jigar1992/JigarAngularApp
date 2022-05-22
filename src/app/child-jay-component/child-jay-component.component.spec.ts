import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildJayComponentComponent } from './child-jay-component.component';

describe('ChildJayComponentComponent', () => {
  let component: ChildJayComponentComponent;
  let fixture: ComponentFixture<ChildJayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildJayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildJayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
