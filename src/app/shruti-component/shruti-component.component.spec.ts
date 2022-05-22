import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShrutiComponentComponent } from './shruti-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

// translateService = TestBed.get(TranslateService);

fdescribe('ShrutiComponentComponent', () => {
  let component: ShrutiComponentComponent;
  let fixture: ComponentFixture<ShrutiComponentComponent>;
  // let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrutiComponentComponent ],
      // providers:[translateService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrutiComponentComponent);
    // translateService = TestBed.get(TranslateService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testMyFuntion', () => {
    component.getList();
    expect(component.getList()).toEqual([
      { FirstName : "Jigar" },
      { LastName : "Thakkar" },
      { Age : 12 }
    ])
  });

  it('testMyFuntion1', () => {
    component.getList();
    expect(component.getList()).toEqual([
      { FirstName : "Jigar" },
      { LastName : "Thakkar" },
      { Age : 12 }
    ])
  });
});
