import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPlacaMaePage } from './view-placa-mae.page';

describe('ViewPlacaMaePage', () => {
  let component: ViewPlacaMaePage;
  let fixture: ComponentFixture<ViewPlacaMaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacaMaePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPlacaMaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
