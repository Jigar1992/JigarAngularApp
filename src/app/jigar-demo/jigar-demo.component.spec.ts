import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigarDemoComponent } from './jigar-demo.component';

describe('JigarDemoComponent', () => {
  let component: JigarDemoComponent;
  let fixture: ComponentFixture<JigarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JigarDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JigarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
