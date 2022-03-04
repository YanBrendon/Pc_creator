import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoriaRanPage } from './memoria-ran.page';

describe('MemoriaRanPage', () => {
  let component: MemoriaRanPage;
  let fixture: ComponentFixture<MemoriaRanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaRanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoriaRanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
