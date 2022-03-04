import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontagemPage } from './montagem.page';

describe('MontagemPage', () => {
  let component: MontagemPage;
  let fixture: ComponentFixture<MontagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
