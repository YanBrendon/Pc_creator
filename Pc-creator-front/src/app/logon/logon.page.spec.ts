import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogonPage } from './logon.page';

describe('LogonPage', () => {
  let component: LogonPage;
  let fixture: ComponentFixture<LogonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
