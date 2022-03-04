import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcessadorPage } from './processador.page';

describe('ProcessadorPage', () => {
  let component: ProcessadorPage;
  let fixture: ComponentFixture<ProcessadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
