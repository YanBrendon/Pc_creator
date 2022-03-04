import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmazenamentoPage } from './armazenamento.page';

describe('ArmazenamentoPage', () => {
  let component: ArmazenamentoPage;
  let fixture: ComponentFixture<ArmazenamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmazenamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmazenamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
