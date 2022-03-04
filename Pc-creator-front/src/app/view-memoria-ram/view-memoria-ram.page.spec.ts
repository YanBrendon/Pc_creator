import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMemoriaRamPage } from './view-memoria-ram.page';

describe('ViewMemoriaRamPage', () => {
  let component: ViewMemoriaRamPage;
  let fixture: ComponentFixture<ViewMemoriaRamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemoriaRamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMemoriaRamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
