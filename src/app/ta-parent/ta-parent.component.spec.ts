import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAParentComponent } from './ta-parent.component';

describe('TAParentComponent', () => {
  let component: TAParentComponent;
  let fixture: ComponentFixture<TAParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
