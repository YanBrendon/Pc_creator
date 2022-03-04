import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewProcessadorPage } from './view-processador.page';

describe('ViewProcessadorPage', () => {
  let component: ViewProcessadorPage;
  let fixture: ComponentFixture<ViewProcessadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProcessadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
