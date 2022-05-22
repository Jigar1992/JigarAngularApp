import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNikunjComponent } from './child-nikunj.component';

describe('ChildNikunjComponent', () => {
  let component: ChildNikunjComponent;
  let fixture: ComponentFixture<ChildNikunjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNikunjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNikunjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
