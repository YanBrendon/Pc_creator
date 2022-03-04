import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewArmazenamentoPage } from './view-armazenamento.page';

describe('ViewArmazenamentoPage', () => {
  let component: ViewArmazenamentoPage;
  let fixture: ComponentFixture<ViewArmazenamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArmazenamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewArmazenamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
