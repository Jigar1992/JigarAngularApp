import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshvaComponentComponent } from './meshva-component.component';

describe('MeshvaComponentComponent', () => {
  let component: MeshvaComponentComponent;
  let fixture: ComponentFixture<MeshvaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeshvaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshvaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
