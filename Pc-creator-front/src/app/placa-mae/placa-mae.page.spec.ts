import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacaMaePage } from './placa-mae.page';

describe('PlacaMaePage', () => {
  let component: PlacaMaePage;
  let fixture: ComponentFixture<PlacaMaePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacaMaePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacaMaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
